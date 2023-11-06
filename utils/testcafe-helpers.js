import { t } from 'testcafe';
import faker from 'faker';


export async function login(email, password) {
}

export async function register(email, password, repeatpass) {
}

export  function generateRandomUser() {
    const email = faker.internet.email();
    const password = `${faker.internet.password()}A!1`;
    return { email, password, repeatpassword: password };
  }