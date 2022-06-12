import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { ContextProvider } from '../contexts/MainContext';

function MyApp({ Component, pageProps }) {
 if (Component.prototype) {
  const prototype = Object.keys(Component.prototype);
  if (prototype.indexOf('type') !== -1)
   return (
    <ContextProvider>
     <Component {...pageProps} />
    </ContextProvider>
   );
 }

 return (
  <ContextProvider>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </ContextProvider>
 );
}

export default MyApp;
