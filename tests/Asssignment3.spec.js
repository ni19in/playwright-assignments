import {test, expect} from '@playwright/test';

test("Alerts, Confirm & Prompt" ,async ({page})=> {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
//js ALert
page.once('dialog', async dialog =>{
  console.log(`Alert message: ${dialog.message()}`);
  await dialog.accept();
});
await page.click('text=Click for JS Alert');
await expect(page.locator('#result')).toHaveText("You successfully clicked an alert");


//js confirm
page.once('dialog', async dialog =>{
  console.log(`Confirm message: ${dialog.message()}`);
  await dialog.accept();
});
await page.click('text=Click for JS Confirm');
await expect(page.locator('#result')).toHaveText("You clicked: Ok");

// JS Prompt
 
page.once('dialog', async dialog => {
    console.log('Prompt Message:', dialog.message());

    await dialog.accept('Playwright Student');
});

await page.click('text=Click for JS Prompt');

await expect(page.locator('#result'))
    .toHaveText('You entered: Playwright Student');

});