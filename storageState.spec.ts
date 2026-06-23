import test  from "@playwright/test"
test("Storage State",async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('democsr')
await page.locator('#password').fill('crmsfa')
await page.locator('[value="Login"]').click()
await page.context().storageState({path:'Data/leafTapslogin.json'})
await page.waitForTimeout(20000)

    
})