import { Selector, t } from 'testcafe';

export default class HomePage {
    constructor() {
        this.welcomeMessage = Selector('h1').withText('Hotel California');
    }

    async getWelcomeMessage() {
        return this.welcomeMessage.innerText;
    }
}