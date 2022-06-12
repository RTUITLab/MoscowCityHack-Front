export function test() {
 var query = `query GetRates {
   getUsers {
    id
   }
  }`;

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
