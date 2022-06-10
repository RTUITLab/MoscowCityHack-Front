import '../styles/globals.css';
import 'antd/dist/antd.css';
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
 if(Component.prototype.type==="Loginpage")
  return <Component {...pageProps} />;
 else
  return <Layout><Component {...pageProps}/></Layout>
}

export default MyApp;
