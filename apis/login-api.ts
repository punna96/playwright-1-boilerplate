import { loginViaAPI } from '../utils/api-utils';

export async function loginUserFromEnv() {
  return loginViaAPI(
    process.env.BASE_URL!,
    process.env.USERNAME!,
    process.env.PASSWORD!
  );
}