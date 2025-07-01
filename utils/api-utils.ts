import { request } from '@playwright/test';

export async function loginViaAPI(baseURL: string, email: string, password: string) {
  const context = await request.newContext();
  const response = await context.post(`${baseURL}/api/login`, {
    data: {
      email,
      password,
    },
  });
  return response;
}