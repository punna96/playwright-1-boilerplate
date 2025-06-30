import { request } from '@playwright/test';

export async function loginViaAPI() {
  const context = await request.newContext();
  const response = await context.post(`${process.env.BASE_URL}/api/login`, {
    data: {
      email: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  });
  return response;
}