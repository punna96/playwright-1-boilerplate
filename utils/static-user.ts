import users from './test-data.json';

export function getUserByRole(role: 'admin' | 'user') {
  return users[role];
}