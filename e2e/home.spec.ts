import { test, expect } from '@playwright/test';

test.describe('Squared Coffee E2E Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for the precision coffee loader to disappear
    await expect(page.locator('main')).toBeVisible({ timeout: 5000 });
  });

  test('Core Navigation - header links should be present', async ({ page, isMobile }) => {
    if (isMobile) {
      // On mobile, open the hamburger menu first
      await page.locator('header').locator('button').last().click();
      await expect(page.getByText('Our Story').locator('visible=true').first()).toBeVisible();
    } else {
      // On desktop, links are visible immediately
      const nav = page.locator('nav').first();
      await expect(nav.getByText('Our Story').locator('visible=true').first()).toBeVisible();
    }
  });

  test('Language Context Switching', async ({ page }) => {
    // There are multiple AR buttons (desktop and mobile specific). Filter by visible.
    const langButton = page.locator('button', { hasText: /^AR|عربي$/i }).locator('visible=true').first();
    
    await expect(langButton).toBeVisible();
    await langButton.click();
    
    // Check if the html dir changes to rtl
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    
    // Check for switch back
    const enButton = page.locator('button', { hasText: /^EN$/i }).locator('visible=true').first();
    await expect(enButton).toBeVisible();
    await enButton.click();
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  });

  test('Brand Context Switching (Internal Demo Tool)', async ({ page }) => {
    // Look for the fixed BrandSwitcher tool
    // We'll search for RAW CAFFEE since it's the alternate
    const rawBtn = page.getByRole('button', { name: /Raw Caffee/i }).first();
    
    if (await rawBtn.isVisible()) {
      await rawBtn.click();
      // Should show 'RAW' brand text on the page somewhere
      await expect(page.locator('body')).toContainText(/Raw/i);
    }
  });

});
