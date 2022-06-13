import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { events } from '../utils/data';
import Head from 'next/head';

const context = React.createContext({});

function useAuth() {
 return React.useContext(context);
}

export function useUser() {
 const [state, setState] = useAuth();
 return [
  state.user,
  (e) => {
   setState({ user: { ...state.user, ...e } });
  },
 ];
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
  !isLoggedIn &&
  ['/', '/login', '/form/create', '/account/export'].indexOf(
   router.pathname
  ) === -1
 ) {
  return (
   <>
    <Head>
     <meta httpEquiv="refresh" content="0; url=/login" />
    </Head>
   </>
  );
 }

 return children;
}

export { useAuth, ContextProvider };

const testState = {
 isLoggedIn: false,
 type: 'person', // moderator/company
 shop: {
  items: [
   {
    id: 23,
    imgSrc:
     'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    title: 'Футболка',
    description: 'Хлопок 100%, выдерживает 2000 стирок',
    price: 300,
    liked: true,
    inCart: false,
   },
   {
    id: 13,
    imgSrc:
     'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    title: 'Кепка',
    description: 'Красная кепка',
    price: 100,
    liked: false,
    inCart: false,
   },
   {
    id: 46,
    imgSrc:
     'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    title: 'Рюкзак',
    description: 'Водонепроницаемый рюкзак красного цвета двадцатого века',
    price: 20,
    liked: false,
    inCart: false,
   },
   {
    id: 256,
    imgSrc:
     'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    title: 'Самолет',
    description: 'О',
    price: 3000000,
    liked: false,
    inCart: false,
   },
  ],
  totalCardPrice: 0,
 },
 user: {
  // = moderator
  name: 'Павел',
  surname: 'Сыроедов',
  birthdate: 4121234,
  avatar:
   'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  exp: 370,
  points: 14323,
  eventsParticipate: [events[0], events[1], events[2]],
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
