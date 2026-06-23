import test  from "@playwright/test"

test.use({

    storageState:'Data/leafTapslogin.json'
})

test("Skip login using storageState",async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/login')
await page.locator('.crmsfa').click()

})