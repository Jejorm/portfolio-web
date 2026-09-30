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

	test('should size every hero target for touch and expose a copy button', async ({
		page,
	}) => {
		await page.goto('/')

		const hero = page.locator('#top')
		const primary = hero.getByRole('link', { name: 'Get in touch' })
		const email = hero.getByRole('link', { name: 'jejorm8@gmail.com' })
		const copy = hero.getByRole('button', { name: 'Copy email' })
		const projects = hero.getByRole('link', { name: 'See projects' })

		await expect(copy).toHaveCount(1)

		const height = async (locator: typeof primary) =>
			(await locator.boundingBox())?.height ?? 0

		expect(await height(primary)).toBeGreaterThanOrEqual(48)
		for (const target of [email, copy, projects]) {
			expect(await height(target)).toBeGreaterThanOrEqual(44)
		}
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
		const copy = page.locator('#top [data-copy-email]')
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
