/*import {test,expect} from "@playwright/test"

test('Learn assertions in Playwright', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

// Locator Assertion-retries
await expect(page.locator('#username')).toBeVisible()
await expect(page.locator('#username')).toBeEnabled()

//By default-hard assertion-stops the execution 
await expect(page.locator('#username')).toBeEnabled({timeout:8000})

//Soft Assertion
//await expect.soft(page.locator('#username')).toBeDisabled()


const textboxstatus = await page.locator('#username').isEditable()

//Generic Assertion-will not retries
expect.soft(textboxstatus).toBeFalsy()
const Title=await page.title()
console.log(Title); //Leaftaps - TestLeaf Automation Platform
const Url=page.url() 
console.log(Url) //https://leaftaps.com/opentaps/control/main

expect(Title).toBe('Leaftaps - TestLeaf Automation Platform')
expect(Url).toContain('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill("demoscr2",{timeout:2000})
  
})*/


//classroom activity-01

import {test,expect} from "@playwright/test"

test('Learn assertions in Playwright', async ({page}) => {
await page.goto("https://leafground.com/input.xhtml")
await expect(page.getByPlaceholder('Disabled')).toBeDisabled();
await expect (page.getByPlaceholder('Babu Manickam')).toBeEditable();
await page.getByPlaceholder('Babu Manickam').fill("Muthulakshmi");
await expect .soft(page.getByPlaceholder('Babu Manickam')).toBeDisabled();//soft assertion
await page.locator('[value="Can you clear me, please?"]').clear();
await page.locator('[value="Can you clear me, please?"]').fill("Playwright learning");

})