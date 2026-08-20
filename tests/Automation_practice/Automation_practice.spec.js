import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Chethan');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('cgowdan@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9663824163');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('Nelamangala');
  await page.locator('.form-check').first().click();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByLabel('Country:').selectOption('india');
  await page.getByLabel('Colors:').selectOption('yellow');
  await page.getByLabel('Sorted List:').selectOption('cat');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '10' }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '11' }).click();
  await page.getByPlaceholder('Start Date').fill('2026-08-04');
  await page.getByPlaceholder('End Date').fill('2026-08-12');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('You selected a range of 8')).toBeVisible();
});