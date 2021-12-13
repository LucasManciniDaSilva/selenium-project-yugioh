import { Given } from '@wdio/cucumber-framework';

  Given(/^I am on the yugiohdb page$/, async function(){

    await browser.url("https://www.db.yugioh-card.com/yugiohdb/?request_locale=en");
    
    browser.debug()

  })
  
 