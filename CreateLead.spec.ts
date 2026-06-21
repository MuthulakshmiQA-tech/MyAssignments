import test from "@playwright/test"
test("createLead", async ({page}) => {
    await page.goto("https://login.salesforce.com");
   await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('#Login').click();
await page.waitForTimeout(3000);
await page.locator('.slds-icon-waffle').click();
await page.locator('(//button[@class="slds-button"])[2]').click();
await page.locator('(//div[@class="slds-app-launcher__tile slds-text-link_reset slds-is-draggable"])[7]').click();
await page.locator('//a[@title="Leads"]').click();
await page.locator('//a[@title="New"]').click();
await page.locator('//input[@name="lastName"]').fill("lakshmitester")
await page.locator('//input[@name="Company"]').fill("TestLeaf")
await page.locator('//button[@name="SaveEdit"]').click();
})