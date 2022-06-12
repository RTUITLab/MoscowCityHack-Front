import { createQuery } from './index';

export class TokenManager {
 constructor() {}

 async auth(login, password) {
  const token = (
   await createQuery(
    `
		 query{
			authorize(login: "${login}", password: "${password}") {
			 token, role
			}
		}
		 `
   )
  ).data.authorize;

  console.log(token, login, password);
  if (token.token === 'incorrect login or password') return undefined;

  localStorage.setItem('ACCESS_TOKEN', token.token);
  localStorage.setItem('ROLE', token.role);
  return token;
 }

 deleteToken() {
  localStorage.removeItem('ACCESS_TOKEN');
  return 1;
 }

 getToken(login, password, params) {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');

  if (params) {
   if (params.new) return this.auth(login, password);
   if (params.new === false) return ACCESS_TOKEN || undefined;
  }

  if (ACCESS_TOKEN) {
   return ACCESS_TOKEN;
  } else if (login && password) {
   return this.auth(login, password);
  } else {
   return undefined;
  }
 }
}
