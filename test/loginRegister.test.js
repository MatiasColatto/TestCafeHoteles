import { Selector, t } from 'testcafe';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import { generateRandomUser } from '../utils/testcafe-helpers';

fixture`Register and login`.page`http://localhost:3002/register`;

const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const welcomeMessageSelector = Selector('h1').withText('Hotel California');
const randomUser = generateRandomUser();

test(`Register and login \t CREDENTIALS -->  Email : ${randomUser.email}  |  Password : ${randomUser.password}`, async (t) => {
  await registerPage.register(randomUser.email, randomUser.password, randomUser.repeatpassword);
  await t.wait(5000);
  await loginPage.login(randomUser.email, randomUser.password);
  await t.wait(3000);
  await t.expect(welcomeMessageSelector.exists).ok();
});