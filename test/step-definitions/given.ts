import { Given } from '@wdio/cucumber-framework';
import logger from '../helper/logger';

  Given(/^I am on the yugiohdb page for the (.*)$/, async function(testId){
    logger.info(`>> Start test case: ${testId}`)
    await browser.url("https://www.db.yugioh-card.com/yugiohdb/?request_locale=en");
    browser.debug()
  })
  
 