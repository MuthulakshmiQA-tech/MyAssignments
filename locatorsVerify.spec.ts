/*import {test,expect} from "@playwright/test"

test('leaftaps login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")

//nth(0) or first() -> for first match
//nth(1)-> second match
//nth(n)-> last()-> for last match
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator(text='CRM/SFA').click()

await expect(page).toHaveTitle('My Home | opentaps CRM')
await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main')

let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);

})*/

import {test,expect} from "@playwright/test"

test('Salesforce login', async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")
await page.locator('#password').fill("TestLeaf@2025")
await page.locator('#Login').click();
await page.waitForTimeout(3000);
//await expect(page).toHaveTitle('Home|Salesforce')
//await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')
let pageTitle= await page.title();
console.log(pageTitle)

let pageurl=page.url()
console.log(pageurl);
//const homeTab = page.locator('text=Home');
  //await expect(homeTab).toBeVisible({ timeout: 15000 });


})