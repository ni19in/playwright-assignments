export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameTxt = page.getByPlaceholder('Username');
        this.passwordTxt = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.errorMsg = page.locator('[data-test="error"]');
    }

    async enterUsername(username) {
        await this.usernameTxt.fill(username);
    }

    async enterPassword(password) {
        await this.passwordTxt.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.errorMsg.textContent();
    }
}