import { Selector, t } from 'testcafe';
import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import { users } from '../users'; 

fixture`Login`.page`http://localhost:3002/login`;

const loginPage = new LoginPage();
const homePage = new HomePage();

users.forEach((user) => {
  test(`Iniciar sesión con ${user.email}`, async (t) => {
    await loginPage.login(user.email, user.password);
    await t.wait(2000);
    await t.expect(homePage.welcomeMessage.exists).ok();
  });
});