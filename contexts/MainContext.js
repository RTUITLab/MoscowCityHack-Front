import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';

const context = React.createContext({});

function useAuth() {
 //кастомный хук для удобства
 return React.useContext(context);
}

function ContextProvider({ children }) {
 const [state, editState] = useState(testState);

 const setState = (e) => {
  editState((prevState) => ({ ...prevState, ...e }));
 };

 return (
  <context.Provider value={[state, setState]}>
   <RequireAuth>{children}</RequireAuth>
  </context.Provider>
 );
}

function RequireAuth({ children }) {
 const isLoggedIn = useAuth()[0].isLoggedIn;
 const router = useRouter();
 console.log(isLoggedIn);
 if (
  !isLoggedIn &&
  router.pathname !== '/' &&
  router.pathname !== '/login' &&
  router.pathname !== '/form/create'
 ) {
  setTimeout(() => router.push('/login'), 0); //вместо этого можно добавить страницу "вы не авторизованы" с кнопкой возврата на Login
  return <></>;
 }

 return children;
}

export { useAuth, ContextProvider };

const testState = {
 isLoggedIn: false,
 type: 'person', // moderator/organization
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
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { imgSrc: '/images/achieve1.svg', description: 'Поможем лайками' },
  ],
 },
};
