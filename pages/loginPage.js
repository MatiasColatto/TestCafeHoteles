import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.emailInput = Selector('input').withAttribute('placeholder', 'Email');
        this.passwordInput = Selector('input').withAttribute('placeholder', 'Password');
        this.loginButton = Selector('button').withText('Log in');
    }

    async login(email, password) {
        await t.typeText(this.emailInput, email)
               .typeText(this.passwordInput, password)
               .click(this.loginButton);
    }
}