import { Then } from '@wdio/cucumber-framework';
import { expect } from "chai";


  Then(/^I Click on normal type card$/, async function(){
    let ele = await $(`//*[@id="search_by_other"]/div/div/div[2]/a[1]`)
    ele.scrollIntoView()
    ele.click()
   })


  Then(/^I should click on the result and verify the card name is (.*)$/, async function(cardName){
  let eleValue = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li/dl/dt/span[2]/strong`).getText()
  expect(cardName).to.equal(eleValue)
  let ele = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li/dl`)
  ele.click()
 })
