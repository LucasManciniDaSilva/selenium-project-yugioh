import { Then } from '@wdio/cucumber-framework';
import { expect } from "chai";


  Then(/^I Click on normal type card$/, async function(){
    let ele = await $(`//*[@id="search_by_other"]/div/div/div[2]/a[1]`)
    ele.scrollIntoView()
    ele.click()
   })


  Then(/^I should click on the result and verify the card name is (.*)$/, async function(cardName){
    let cardResult = 1
    for(let i = 0; i < cardResult; i++){
      let card = await $(`//*[@id="article_body"]/table/tbody/tr/td/div[3]/ul/li[${cardResult}]/dl/dt`)
      let cardString = await card.getText()
      if(cardName != cardString){
        cardResult++
      }
      else{
        card.click()
      }
    }  
 })
