import { useEffect, useState } from 'react';
import { TokenManager } from './TokenManager';

export function getUsers(queryProps, data) {
 let query;
 if (queryProps === 'getUser')
  query = `query GetRates {
   getUser(id: ${data.id}) {
    id
   }
  }`;
 //если без getUsers() - то вернет всех пользователей
 fetch(process.env.NEXT_PUBLIC_API_HOST, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
  },
  body: JSON.stringify({
   query,
   variables: {},
  }),
 })
  .then((r) => r.json())
  .then((data) => console.log('data returned:', data));
}

export function sendData(mutationProps, data) {
 let mutation;
 if (mutationProps === 'register') {
  if (data.accountType === 'company')
   mutation = `mutation {
    registerAuthorizeCom(company: 
      {
      name: "${data.name}", 
      user: {
        login: "${data.login}", 
        password: "${data.password}", 
        role: {
          name: "ROLE_COMPANY"
        }
      }
      }) {
      token
    }
  }
  `;
  else if (data.accountType === 'person')
   mutation = `mutation{
    registerAuthorizeVol(volunteer: {
      name: "${data.name}",
      surname: "${data.surname}",
      birthDate: ${new Date(data.birthdate).getTime()},
      user: {
        login: "${data.login}",
        password: "${data.password}",
        role: {
          name: "ROLE_VOLUNTEER"
        }
      }
    }) {
      token
    }
   } `;
 }
 console.log(mutation);
 return new Promise((resolve) => {
  fetch(process.env.NEXT_PUBLIC_API_HOST, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
   },
   body: JSON.stringify({
    query: mutation,
   }),
  })
   .then((r) => r.json())
   .then((data) => {
    resolve(data);
   });
 });
}

export function createQuery(query, params) {
 let TOKEN =
  new TokenManager().getToken(undefined, undefined, {
   new: false,
  }) || '';
 if (params?.withoutToken) {
  TOKEN = '';
 }
 return fetch(process.env.NEXT_PUBLIC_API_HOST, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
   Authorization: `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
   query: query,
  }),
 })
  .then((r) => r.json())
  .then((data) => {
   return data;
  })
  .catch((e) => {
   return undefined;
  });
}

export function useQuery(query) {
 const [state, editState] = useState({
  loading: true,
  error: undefined,
  data: undefined,
 });

 let callbackFunc = undefined;

 const setState = (e) => {
  editState((prevState) => ({ ...prevState, ...e }));
 };

 useEffect(() => {
  fetch(process.env.NEXT_PUBLIC_API_HOST, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${new TokenManager().getToken(0, 0)}`,
   },
   body: JSON.stringify({
    query: query,
   }),
  })
   .then((r) => r.json())
   .then((data) => {
    setState({ data, loading: false });
    if (callbackFunc) {
     callbackFunc();
    }
   })
   .catch((e) => {
    setState({ error: e, loading: false });
    if (callbackFunc) {
     callbackFunc();
    }
   });
 }, []);

 return {
  error: state.error,
  loading: state.loading,
  data: state.data,
  subscribe: (callback) => {
   callbackFunc = callback;
  },
 };
}
