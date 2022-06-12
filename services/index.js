export function getData(queryProps, data) {
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
  if (data.accounType === 'company')
   mutation = `mutation {
    createCompany(company: 
      {
      name: ${data.name}, 
      user: {
        login: ${data.login}, 
        password: ${data.password}, 
        role: {
          name: "ROLE_COMPANY"
        }
      }
      }) {
      id
    }
  }
  `;
  else if (data.accounType === 'person')
   mutation = `mutation{
    createVolunteer(volunteer: {
      name: ${data.name},
      surname: ${data.surname},
      birthDate: ${data.birthdate.format('YYYY-MM-DD')},
      user: {
        login: ${data.login},
        password: ${data.password},
        role: {
          name: "ROLE_VOLUNTEER"
        }
      }
    }) {
      id,
      name
    }
   } `;
 }
 fetch(process.env.NEXT_PUBLIC_API_HOST, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
  },
  body: JSON.stringify({
   mutation,
  }),
 })
  .then((r) => r.json())
  .then((data) => console.log('data returned:', data));
}
