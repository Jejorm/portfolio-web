import { expect, test } from '@playwright/test'

test.describe('Portfolio Core Experience', () => {
	test('should load the main page with correct SEO title', async ({ page }) => {
		await page.goto('/')

		// Check SEO Title (English - default)
		await expect(page).toHaveTitle(/Full-Stack Developer \| Professional Portfolio/i)
	})

	test('should switch to Spanish and update content', async ({ page }) => {
		await page.goto('/es')

		// Check SEO Title (Spanish)
		await expect(page).toHaveTitle(/Desarrollador Full-Stack \| Portafolio Profesional/i)

		// Check Hero subtitle in Spanish
		const heroTitle = page.locator('#hero-heading')
		await expect(heroTitle).toContainText('aplicaciones web escalables')
	})

	test('should have a functional navigation to projects', async ({ page }) => {
		await page.goto('/')

		// Click on the Hero CTA
		await page.getByRole('link', { name: /Navigate to selected projects archive/i }).click()

		// Verify it scrolled to or navigated to the projects section
		await expect(page).toHaveURL(/.*#projects/)
		const projectsHeading = page.locator('h2', { hasText: /Projects/i })
		await expect(projectsHeading).toBeVisible()
	})
})
