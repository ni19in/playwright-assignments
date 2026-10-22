import {test, expect} from '@playwright/test';

test("Dropdown + Loop" ,async ({page})=> {
await page.goto("https://the-internet.herokuapp.com/dropdown");
const options = page.locator('#dropdown option');
await page.selectOption('#dropdown', '1');
await expect(page.locator('#dropdown')).toHaveValue('1');
await page.selectOption('#dropdown', '2');
await expect(page.locator('#dropdown')).toHaveValue('2');
console.log("Option 2 selected successfully");
const count = await options.count()
 console.log(`no of dropdown: ${count}`);
for (let i = 0; i < count; i++) {
const text = await options.nth(i).textContent();
console.log(`Option ${i + 1}: ${text}`);
}
const option1text = await options.nth(1).textContent();
console.log(`no of dropdown: ${count}`);

});