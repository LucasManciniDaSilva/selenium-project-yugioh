import { Given } from '@wdio/cucumber-framework';

  Given(/^I am on the yugiohdb page$/, async function(){
    browser.url("https://www.db.yugioh-card.com/yugiohdb/%22&request_locale=en?request_locale=en");
    browser.debug()
  })
  
 