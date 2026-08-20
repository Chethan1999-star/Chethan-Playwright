import { test, expect } from '@playwright/test';
import data from '../testdata/testqa.json';

import { faker } from '@faker-js/faker';

test('fill the form', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Chethan');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('cgowdam@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});


test('fill the form - JSon ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(data.Fullname);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(data.Currentaddress);
  await page.locator('#permanentAddress').fill(data.Permanentaddress);
  await page.getByRole('button', { name: 'Submit' }).click();
});



test('fill the form - .env ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENTADDRESS);
  await page.locator('#permanentAddress').fill(process.env.APP_PERMANENTADDRESS);
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - fakerjs  ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.person.jobType());
  await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.person.jobArea());
  await page.locator('#permanentAddress').fill(faker.person.jobArea());
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - JS  ', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  let a = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'Full Name' }).fill(a + data.Fullname);
  //let a = (Math.random() + 1).toString(36).substring(7);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(a + data.email);
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('fill the form - CLI', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');


  await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME);
  await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL);
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});