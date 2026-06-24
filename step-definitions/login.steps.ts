import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, Then } = createBdd();

Given('I open Microsoft login page', async ({ page }) => {
  await page.goto(process.env.MS_URL!);
});

Then('I should be able to login using Microsoft credentials', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(process.env.MS_USERNAME!);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.MS_PASSWORD!);
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('primaryButton').click();
  await expect(page).toHaveTitle('M365 Copilot');
});
