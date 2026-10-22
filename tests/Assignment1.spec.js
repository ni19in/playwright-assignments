import {test, expect} from '@playwright/test';

test ("Browser Navigation & Page Methods", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    const internetTitle  = page.title()
    const internetURL  = page.url()
    console.log('url:', internetURL);
    console.log('title:', internetTitle );
    await expect(page).toHaveTitle("The Internet");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/");
    await Promise.all([
        page.click('a[href="/abtest"]'),
        page.waitForURL()
        ]);
  const abTitle = await page.title();
  const abURL = page.url();
  console.log("Redirected Page Title:", abTitle);
  console.log("Redirected Page URL:", abURL);
  await page.goto ("https://www.saucedemo.com/");
  const Swagtitle = await page.title()
  const SwagUrl = page.url() 
  console.log("Url:",SwagUrl);
  console.log("Title:",Swagtitle );
  await page.goBack();
  console.log("Page goback to https://the-internet.herokuapp.com/");
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/abtest");

  await page.goForward();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await page.reload();
  console.log("Url:",SwagUrl);
  await expect(page).toHaveTitle("Swag Labs");
})