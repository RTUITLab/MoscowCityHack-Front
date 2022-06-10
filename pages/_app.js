import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
 if(Component.prototype){
  const prototype = Object.keys(Component.prototype)
  if(prototype.indexOf("type") !== -1)
   return <Component {...pageProps} />;
  else
   return <Layout><Component {...pageProps}/></Layout>
 }return <Layout><Component {...pageProps} /></Layout>

}

export default MyApp;
