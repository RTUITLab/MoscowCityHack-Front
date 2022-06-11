import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
 uri: 'http://10.11.162.170:8080/api/mch-back/',
 cache: new InMemoryCache(),
});

export default function App({ children }) {
 return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
