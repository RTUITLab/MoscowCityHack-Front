import React, { useState } from 'react';
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
 if (
  false &&
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
 isLoggedIn: true,
 type: 'person', // moderator/company
 user: {
  // = moderator
  name: 'Павел',
  surname: 'Сыроедов',
  birthdate: 4121234,
  /*login: '',
  password: '',*/
  avatar:
   'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  exp: 370,
  points: 14323,
  eventsParticipate: [eventProto, eventProto, eventProto],
  achievements: [
   {
    id: 1,
    imgSrc: '/images/achieve1.svg',
    description: 'Помощь пожилым людям',
   },
   {
    id: 2,
    imgSrc: '/images/blueBadge.svg',
    description: 'Помощь молодым людям',
   },
   { id: 3, imgSrc: '/images/achieve2.svg', description: 'Лучший' },
   {
    id: 4,
    imgSrc: '/images/achieve1.svg',
    description: 'Помощь пожилым людям',
   },
   { id: 5, imgSrc: '/images/badge.png', description: 'Помощь пожилым людям' },
   {
    id: 6,
    imgSrc: '/images/achieve1.svg',
    description: 'Помощь пожилым людям',
   },
   { id: 7, imgSrc: '/images/achieve2.svg', description: 'Лучший волонтер' },
   { id: 8, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 9, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 10, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 11, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 12, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 13, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 14, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 15, imgSrc: '/images/blueBadge.svg', description: '100 друзей' },
   { id: 16, imgSrc: '/images/achieve1.svg', description: 'Поможем лайками' },
  ],
 },
};
