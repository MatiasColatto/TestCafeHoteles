import { Selector, t } from 'testcafe';
import RegisterPage from '../pages/registerPage';
import { badRegister } from '../users'; 

fixture`Register with wrong credentials`.page`http://localhost:3002/register`;

const registerPage = new RegisterPage();
const errorMessageSelector = Selector('div').withText('Error de registro:');


badRegister.forEach((user) => {
test('Register with wrong credentials', async (t) => {
    await registerPage.register(user.email, user.password, user.password);
    await t.wait(3000);
    await t.expect(errorMessageSelector.exists).ok();
    await t.wait(2000);
});
});