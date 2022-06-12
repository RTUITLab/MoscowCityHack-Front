export function getData() {
 var query = `query GetRates {
   getUser(id: 23) {
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
  mutation = `mutation {
    createCompany(company: 
      {
      name: "companyLOH", 
      user: {
        login: "comp", 
        password: "comp", 
        role: {
          name: "ROLE_COMPANY"
        }
      }
      }) {
      id
    }
  }
  `;
  /* 
  mutation{
    createVolunteer(volunteer: {
      name: "mod1",
      surname: "mod1",
      birthDate: "2022-01-01",
      user: {
        login: "vol1",
        password: "vol1",
        role: {
          name: "ROLE_VOLUNTEER"
        }
      }
    }) {
      id,
      name
    } */
 }
 fetch(process.env.NEXT_PUBLIC_API_HOST, {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
   Accept: 'application/json',
  },
  body: JSON.stringify({
   mutation,
   variables: {},
  }),
 })
  .then((r) => r.json())
  .then((data) => console.log('data returned:', data));
}
