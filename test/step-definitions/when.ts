import { When } from '@wdio/cucumber-framework';
import { expect } from "chai";

let winNumber = 1

  
  When(/^I Click on Card Search$/, async function(){
   let ele = await $(`//*[@id="topmenu_set"]/div[1]/div[1]/div/a/p[2]`)
    ele.click()
  })

  When(/^I search for (.*)$/, async function(cardName){
    let ele = await $(`[name=keyword]`)
    ele.scrollIntoView()
    await ele.setValue(cardName)
    await browser.keys("Enter")
})

 When(/^Verify is the card page is for (.*)$/, async function(cardName){
  let winHandles = await browser.getWindowHandles()
  await browser.switchToWindow(winHandles[winNumber])
  let headerTxt = await $(`<h1>`).getText()
  console.log(headerTxt)
  expect(headerTxt).to.contain(cardName)
  winNumber = winNumber + 1
})
