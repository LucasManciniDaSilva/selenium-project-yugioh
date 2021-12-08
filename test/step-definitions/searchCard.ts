import { Given, When, Then} from '@wdio/cucumber-framework';
import { expect } from "chai"

let winNumber = 1

  Given(/^I am on the yugiohdb page$/, async function(){
    browser.url("https://www.db.yugioh-card.com/yugiohdb/%22&request_locale=en?request_locale=en");
    browser.debug()
  })
  
  When(/^I Click on Card Search$/, async function(){
   let ele = await $(`//*[@id="topmenu_set"]/div[1]/div[1]/div/a/p[2]`)
    ele.click()
  })

  Then(/^I Click on normal type card$/, async function(){
    let ele = await $(`//*[@id="search_by_other"]/div/div/div[2]/a[1]`)
    ele.scrollIntoView()
    ele.click()
   })

  When(/^I search for (.*)$/, async function(cardName){
    let ele = await $(`[name=keyword]`)
    ele.scrollIntoView()
    await ele.setValue(cardName)
    await browser.keys("Enter")
})

  Then(/^I should click on the result and verify the card name is (.*)$/, async function(cardName){
  let eleValue = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li/dl/dt/span[2]/strong`).getText()
  expect(cardName).to.equal(eleValue)
  let ele = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li/dl`)
  ele.click()
 })

 When(/^Verify is the card page is for (.*)$/, async function(cardName){
  let winHandles = await browser.getWindowHandles()
  await browser.switchToWindow(winHandles[winNumber])
  let headerTxt = await $(`<h1>`).getText()
  console.log(headerTxt)
  expect(headerTxt).to.contain(cardName)
  winNumber = winNumber + 1
})

