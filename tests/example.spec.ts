import {test} from '@playwright/test'
test("hellos",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  page.once('dialog',async(dialog)=>{
    // console.log(await sasi.message())
    // // await sasi.accept()
    // await sasi.dismiss()
    
  })
  await page.getByRole("button",{name:'Confirm',exact:true}).click()

  await page.pause()
})

