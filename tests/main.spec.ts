import { expect, test } from '@playwright/test'

test.describe('Portfolio Core Experience', () => {
	test('should load the main page with correct SEO title', async ({ page }) => {
		await page.goto('/')

		// Check SEO Title (English - default)
		await expect(page).toHaveTitle(/Jeremy Orellana \| Full-Stack Developer/i)
		await expect(page.locator('#hero-heading')).toContainText('Jeremy Orellana')
	})

	test('should switch to Spanish and update content', async ({ page }) => {
		await page.goto('/es')

		// Check SEO Title (Spanish)
		await expect(page).toHaveTitle(
			/Jeremy Orellana \| Desarrollador Full-Stack/i,
		)

		// Check Hero statement in Spanish
		await expect(page.locator('#hero-statement')).toContainText(
			'productos completos',
		)
	})

	test('should have a functional navigation to projects', async ({ page }) => {
		await page.goto('/')

		// Click on the Hero CTA
		await page.getByRole('link', { name: 'See projects' }).click()

		// Verify it scrolled to or navigated to the projects section
		await expect(page).toHaveURL(/.*#projects/)
		const projectsHeading = page.locator('h2', { hasText: /Selected work/i })
		await expect(projectsHeading).toBeInViewport()
	})

	test('should lead the hero with a primary contact call to action', async ({
		page,
	}) => {
		await page.goto('/')

		const primary = page
			.locator('#top')
			.getByRole('link', { name: 'Get in touch' })
		await expect(primary).toHaveAttribute('href', '#contact')
		await primary.click()

		await expect(page).toHaveURL(/.*#contact/)
		await expect(page.locator('#contact-heading')).toBeInViewport()
	})

	test('should keep the name readable to assistive tech after splitting letters', async ({
		page,
	}) => {
		await page.goto('/')

		await expect(
			page.getByRole('heading', { level: 1, name: 'Jeremy Orellana' }),
		).toHaveCount(1)
	})

	test('should render every case study with its problem and solution lists', async ({
		page,
	}) => {
		await page.goto('/')

		const articles = page.locator('article.project')
		await expect(articles).toHaveCount(4)
		for (const article of await articles.all()) {
			await expect(article.locator('ol').first().locator('li')).not.toHaveCount(
				0,
			)
			await expect(article.locator('ol').last().locator('li')).not.toHaveCount(
				0,
			)
		}
	})

	test('should show Vikoma as a case study with its live link', async ({
		page,
	}) => {
		await page.goto('/')

		const vikoma = page.locator('article#vikoma')
		await expect(vikoma).toHaveCount(1)
		await expect(vikoma.getByRole('heading', { name: 'Vikoma' })).toBeVisible()
		await expect(
			vikoma.getByRole('link', { name: /Live site/ }),
		).toHaveAttribute('href', 'https://vikoma.app')
	})

	test('should persist the chosen color theme across pages', async ({
		page,
	}) => {
		await page.goto('/')

		const toggle = page.locator('.theme-toggle:visible').first()
		if (!(await toggle.count())) await page.locator('#menu-toggle').click()

		const html = page.locator('html')
		const before = await html.evaluate((el) =>
			getComputedStyle(el).getPropertyValue('--paper').trim(),
		)
		await page.locator('.theme-toggle:visible').first().click()
		const after = await html.evaluate((el) =>
			getComputedStyle(el).getPropertyValue('--paper').trim(),
		)
		expect(after).not.toBe(before)

		const chosen = await html.getAttribute('data-theme')
		await page.goto('/es/')
		await expect(page.locator('html')).toHaveAttribute(
			'data-theme',
			chosen ?? '',
		)
	})

	test('should show inline errors when the contact form is empty', async ({
		page,
	}) => {
		await page.goto('/')

		await page.locator('#contact-form button[type="submit"]').click()
		await expect(page.locator('#contact-name')).toHaveAttribute(
			'aria-invalid',
			'true',
		)
		await expect(page.locator('#contact-name-error')).toBeVisible()
		await expect(page.locator('#contact-name')).toBeFocused()
	})

	test('should not use em or en dashes in visible copy', async ({ page }) => {
		for (const path of ['/', '/es/']) {
			await page.goto(path)
			const text = await page.locator('body').innerText()
			expect(text).not.toMatch(/[–—]/)
		}
	})
})

test.describe('Hero call to action', () => {
	test.use({ viewport: { width: 390, height: 664 } })

	test('should size both hero buttons for touch and drop the inline email', async ({
		page,
	}) => {
		await page.goto('/')

		const hero = page.locator('#top')
		const primary = hero.getByRole('link', { name: 'Get in touch' })
		const projects = hero.getByRole('link', { name: 'See projects' })

		await expect(hero.locator('[data-copy-email]')).toHaveCount(0)
		await expect(hero.getByText('jejorm8@gmail.com')).toHaveCount(0)

		const height = async (locator: typeof primary) =>
			(await locator.boundingBox())?.height ?? 0

		expect(await height(primary)).toBeGreaterThanOrEqual(48)
		expect(await height(projects)).toBeGreaterThanOrEqual(48)
	})

	test('should announce the copied email through a status region', async ({
		page,
	}) => {
		// Headless browsers gate the real clipboard; a stub keeps the check deterministic.
		await page.addInitScript(() => {
			Object.defineProperty(navigator, 'clipboard', {
				value: { writeText: async () => {} },
			})
		})
		await page.goto('/')

		// The accessible name changes once copied, so target the hook, not the label.
		const copy = page.locator('#contact [data-copy-email]')
		await copy.click()

		await expect(page.locator('#copy-status')).toHaveText('Copied')
		await expect(copy).toHaveText('Copied')
	})
})

test.describe('Mobile navigation', () => {
	test.use({ viewport: { width: 390, height: 844 } })

	test('should open the menu and close it after choosing a section', async ({
		page,
	}) => {
		await page.goto('/')

		const toggle = page.locator('#menu-toggle')
		const menu = page.locator('#mobile-menu')

		await expect(menu).toBeHidden()
		await toggle.click()
		await expect(menu).toBeVisible()
		await expect(toggle).toHaveAttribute('aria-expanded', 'true')

		await menu.getByRole('link', { name: 'About' }).click()
		await expect(menu).toBeHidden()
		await expect(page).toHaveURL(/.*#about/)
	})
})

test.describe('Theme toggle', () => {
	const labels = { '/': 'Dark mode', '/es/': 'Modo oscuro' } as const

	const openToggle = async (page: import('@playwright/test').Page) => {
		if (!(await page.locator('.theme-toggle:visible').count())) {
			await page.locator('#menu-toggle').click()
		}
		return page.locator('.theme-toggle:visible').first()
	}

	const expectTheme = async (
		page: import('@playwright/test').Page,
		theme: 'dark' | 'light',
	) => {
		const toggle = page.locator('.theme-toggle:visible').first()
		await expect(toggle).toHaveAttribute(
			'aria-pressed',
			String(theme === 'dark'),
		)
		await expect(toggle.locator('.theme-icon-moon')).toBeVisible({
			visible: theme === 'dark',
		})
		await expect(toggle.locator('.theme-icon-sun')).toBeVisible({
			visible: theme === 'light',
		})
		// Both toggles (desktop and mobile sheet) stay in sync.
		for (const button of await page.locator('.theme-toggle').all()) {
			await expect(button).toHaveAttribute(
				'aria-pressed',
				String(theme === 'dark'),
			)
		}
		const paper = await page
			.locator('html')
			.evaluate((el) => getComputedStyle(el).getPropertyValue('--paper').trim())
		expect(paper).toBe(theme === 'dark' ? '#0e0e0f' : '#ececea')
	}

	for (const path of ['/', '/es/'] as const) {
		test(`switches dark to light and back from the system preference on ${path}`, async ({
			page,
		}) => {
			await page.emulateMedia({ colorScheme: 'dark' })
			await page.goto(path)

			const toggle = await openToggle(page)
			await expectTheme(page, 'dark')

			await toggle.click()
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
			expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
				'light',
			)
			await expectTheme(page, 'light')

			await toggle.click()
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
			expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe(
				'dark',
			)
			await expectTheme(page, 'dark')
		})

		test(`switches a stored light theme to dark on ${path}`, async ({
			page,
		}) => {
			await page.emulateMedia({ colorScheme: 'dark' })
			await page.addInitScript(() => localStorage.setItem('theme', 'light'))
			await page.goto(path)

			const toggle = await openToggle(page)
			await expectTheme(page, 'light')

			await toggle.click()
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
			await expectTheme(page, 'dark')
		})

		test(`switches a stored dark theme to light under a light system on ${path}`, async ({
			page,
		}) => {
			await page.emulateMedia({ colorScheme: 'light' })
			await page.addInitScript(() => localStorage.setItem('theme', 'dark'))
			await page.goto(path)

			const toggle = await openToggle(page)
			await expectTheme(page, 'dark')

			await toggle.click()
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
			await expectTheme(page, 'light')
		})

		test(`shows an icon-only toggle named by aria-label on ${path}`, async ({
			page,
		}) => {
			await page.goto(path)
			const toggle = await openToggle(page)

			// Icon only: no visible text, accessible name comes from aria-label.
			expect((await toggle.innerText()).trim()).toBe('')
			await expect(toggle).toHaveAttribute('aria-label', labels[path])
			await expect(toggle).toHaveAccessibleName(labels[path])
			await expect(
				page
					.getByRole('button', {
						name: path === '/' ? /Dark mode/ : /Modo oscuro/,
					})
					.first(),
			).toBeAttached()
			await expect(
				page.locator('.theme-toggle:visible').getByText(labels[path]),
			).toHaveCount(0)

			const box = await toggle.boundingBox()
			expect(box?.height ?? 0).toBeGreaterThanOrEqual(44)
			expect(box?.width ?? 0).toBeGreaterThanOrEqual(44)
		})

		test(`binds the theme click handler only once on ${path}`, async ({
			page,
		}) => {
			await page.emulateMedia({ colorScheme: 'light' })
			await page.goto(path)
			expect(
				await page.evaluate(
					() =>
						(window as unknown as { __themeToggleBound?: boolean })
							.__themeToggleBound,
				),
			).toBe(true)
			const toggle = await openToggle(page)
			await toggle.click()
			// A double-bound handler would flip twice and land back on light.
			await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
		})
	}
})
