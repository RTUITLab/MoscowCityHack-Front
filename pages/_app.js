import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import MainContext from '../contexts/MainContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
 const [state, editState] = useState({
  isLoggedIn: true,
  type: 'organization',
  user: {
   name: 'Павел Сыроедов',
   avatar:
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
   exp: 370,
   points: 14323,
   achievements: [
    { imgSrc: '/images/achieve1.svg', description: 'Помощь пожилым людям' },
    { imgSrc: '/images/blueBadge.svg', description: 'Помощь молодым людям' },
    { imgSrc: '/images/achieve2.svg', description: 'Лучший' },
    { imgSrc: '/images/achieve1.svg', description: 'Помощь пожилым людям' },
    { imgSrc: '/images/badge.png', description: 'Помощь пожилым людям' },
    { imgSrc: '/images/achieve1.svg', description: 'Помощь пожилым людям' },
    { imgSrc: '/images/achieve2.svg', description: 'Лучший волонтер' },
    { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
    { imgSrc: '/images/achieve1.svg', description: 'Поможем лайками' },
   ],
  },
 });

 const setState = (e) => {
  editState((prevState) => ({ ...prevState, ...e }));
 };

 if (Component.prototype) {
  const prototype = Object.keys(Component.prototype);
  if (prototype.indexOf('type') !== -1)
   return (
    <MainContext.Provider value={[state, setState]}>
     <Component {...pageProps} />
    </MainContext.Provider>
   );
 }

 return (
  <MainContext.Provider value={[state, setState]}>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </MainContext.Provider>
 );
}

export default MyApp;
