import { Then } from '@wdio/cucumber-framework';
import { expect } from "chai";
import logger from '../helper/logger';

  Then(/^I Click on normal type card$/, async function(){
    
    let url = await browser.getUrl();
    
    logger.info(`>> actualUrl: ${url}`)
    
    let ele = await $(`//*[@id="search_by_other"]/div/div/div[2]/a[1]`)
    
    ele.scrollIntoView()
    
    ele.click()
   
  })


  Then(/^I should click on the result and verify the card name is (.*)$/, async function(cardName){
    
    let url = await browser.getUrl();
    
    logger.info(`>> actualUrl: ${url}`)
    
    let cardResult = 1
    
    for(let i = 0; i < cardResult; i++){
    
      let card = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li[${cardResult}]/dl/dt`)
    
      let cardInfo = await card.getText()
    
      if(cardName != cardInfo){

        logger.info(`>> This is not the correct card : ${cardInfo}`)
    
        cardResult++
    
      }
    
      else{
    
        await card.scrollIntoView()
    
        logger.info(`>> This is the correct card : ${cardInfo}`)
    
        expect(cardInfo).to.equal(cardName)
    
        card.click()
    
      }
    }  
 })
