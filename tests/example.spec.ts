import {test,expect} from '@playwright/test';
import { Google } from '../pages/Google';
test.describe("Google",()=>{
  test.beforeEach(async({page})=>{
    await page.goto("https://www.google.com")
  })
  test("Click About Tab",async({page})=>{
    const google = new Google(page)
    await google.clickAbout()
    await page.pause()
  })
})