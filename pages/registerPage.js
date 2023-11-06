import { Selector, t } from 'testcafe';

export default class RegisterPage {
    constructor() {
        this.emailInput = Selector('input').withAttribute('placeholder', 'Email');
        this.passwordInput = Selector('input').withAttribute('placeholder', 'Password');
        this.repeatInput = Selector('input').withAttribute('placeholder', 'Confirm Password');
        this.registerButton = Selector('button').withText('Register');
    }

    async register(email, password, repeatpassword) {
        await t.typeText(this.emailInput, email)
               .typeText(this.passwordInput, password)
               .typeText(this.repeatInput, repeatpassword)
               .click(this.registerButton);
    }
    
}