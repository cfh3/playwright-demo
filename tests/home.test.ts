// home.test.ts

import { test, expect } from '@playwright/test';
import { BrowserstackHomePage } from '../pages/home.page';

test('Browserstack homepage verification', async ({ page }) => {
    const homepage = new BrowserstackHomePage(page);
    await homepage.goto();
    await homepage.clickOnProducts();
    // await expect(homepage.productmenudropdown).toContainText(["Live", "Automate", "Percy", "App Live", "App Automate","App Percy", "Test Observability", "Nightwatch.js" ])
    // await expect(homepage.productmenudropdown).toBeEnabled()
});