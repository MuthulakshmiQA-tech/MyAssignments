import {test,expect} from "@playwright/test"
test('LeafTaps', async ({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('demoCSR2');//locating the css element by id
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();//locating the css element by class
    await page.locator(`text='CRM/SFA'`).click()//locating the css element by text
    await page.locator(`text='Leads'`).click()//
    await page.locator('a[id=ext-gen499]').click()//
await page.locator('#createLeadForm_companyName').fill('TeatLeaf');//locating the css element by id
await page.locator('#createLeadForm_firstName').fill('Muthulakshmi');
await page.locator('#createLeadForm_lastName').fill('Maheshwaran');
await page.locator('#createLeadForm_personalTitle').fill('Mrs');
await page.locator('#createLeadForm_generalProfTitle').fill('Testing');
await page.locator('#createLeadForm_annualRevenue').fill('60,000');
await page.locator('#createLeadForm_departmentName').fill('IT');
await page.locator('#createLeadForm_annualRevenue').fill('60,000');
await page.locator('#createLeadForm_primaryPhoneNumber').fill('123456789');
await page.locator('.smallSubmit').click()




})