import { When } from '@wdio/cucumber-framework';
import { expect } from "chai";
import logger from '../helper/logger';

let winNumber = 1

  
  When(/^I Click on Card Search$/, async function(){

    let url = await browser.getUrl()
    
    logger.info(`>> actualUrl: ${url}`)
    
    let ele = await $(`//*[@id="topmenu_set"]/div[1]/div[1]/div/a/p[2]`)
    
    ele.click()
  
  })

  When(/^I search for (.*)$/, async function(cardName){
    
    let url = await browser.getUrl()
    
    logger.info(`>> actualUrl: ${url}`)
    
    let ele = await $(`[name=keyword]`)
    
    ele.scrollIntoView()
    
    await ele.setValue(cardName)
    
    logger.info(`>> Search for this card: ${cardName}`)
    
    await browser.keys("Enter")

  })

 When(/^Verify is the card page is for (.*)$/, async function(cardName){
  
  let url = await browser.getUrl()
  
  logger.info(`>> actualUrl: ${url}`)
  
  let winHandles = await browser.getWindowHandles()
  
  await browser.switchToWindow(winHandles[winNumber])
  
  let headerTxt = await $(`<h1>`).getText()
  
  logger.info(`>> Header value is the same of the card name : ${headerTxt}`)

  logger.info(`>> Card name : ${cardName}`)
  
  expect(headerTxt).to.contain(cardName)
  
  winNumber = winNumber + 1

})
