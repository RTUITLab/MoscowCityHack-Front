import { createQuery } from './index';
import { gql } from '@apollo/client';

class TokenManager {
 constructor() {}

 async auth(login, password) {
  const token = await createQuery(
   gql(
    `
		 
		 
		 `
   )
  );
  localStorage.setItem('ACCESS_TOKEN', token);
  return token;
 }

 getToken(login, password) {
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
  if (ACCESS_TOKEN) {
   return ACCESS_TOKEN;
  } else if (login && password) {
   return this.auth(login, password);
  } else {
   return undefined;
  }
 }
}
