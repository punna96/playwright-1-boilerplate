//Use this command in terminal to install dependenices of faker - npm install @faker-js/faker --save-dev
import { faker } from '@faker-js/faker';

export const generateUser = () => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password('12'),
});