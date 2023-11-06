import { Selector, t } from 'testcafe';
import LoginPage from '../pages/loginPage';
import { users } from '../users'; 

fixture`Login`.page`http://localhost:3002/login`;

const loginPage = new LoginPage();
const welcomeMessageSelector = Selector('h1').withText('Hotel California');

users.forEach((user) => {
  test(`Iniciar sesión con ${user.email}`, async (t) => {
    await loginPage.login(user.email, user.password);
    await t.wait(2000);
    await t.expect(welcomeMessageSelector.exists).ok();
  });
});