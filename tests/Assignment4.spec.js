import {test, expect} from '@playwright/test';

test("New Window Handling" ,async ({page})=> {
   await page.goto('https://the-internet.herokuapp.com/windows');


    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('text=Click Here').click()
    ]);

    await newPage.waitForLoadState('load');
    console.log('URL:', newPage.url());
    console.log('Title:', await newPage.title());
    const header = newPage.locator('h3');
    const headerText = await header.textContent();
    console.log('Header:', headerText);
    await expect(header).toHaveText('New Window');
   await newPage.close();
});


