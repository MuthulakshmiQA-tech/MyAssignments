import test from "@playwright/test"
test("paraBank", async ({page}) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole('link',{name: "Forgot login info?"}).click();
    await page.getByAltText('ParaBank').click();
    await page.getByText("Locations",{exact:true}).nth(0).click()
    await page.getByRole('button').nth(1).click();
    //await page.locator('input [type="text"]').click();
    await page.locator('[name="search"]').click();//attribute selector
await page.locator('[name="search"]').fill("Chennai");
    
    


}) ////classroom activity- 2



/*


import {test} from "@playwright/test"

test("Learn playwright locators",async ({page}) => {

await page.goto("https://login.salesforce.com/")
await page.getByRole("textbox",{name:'Username',exact:true}).fill('dilipkumar.rajendran@testleaf.com')
await page.getByLabel('Password',{exact:true}).fill("TestLeaf@2025")
await page.getByRole('button',{name:"Log In"}).click()
await page.getByTitle("App Launcher",{exact:true}).click()
await page.getByText("View All",{exact:true}).click()
await page.getByPlaceholder("Search apps or items...",{exact:true}).fill('leads')
//await page.getByAltText('Salesforce login')  //verification
//await page.getByTestId('watchNow')


    
})*/