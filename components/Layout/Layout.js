import Header from '../Header/Header';
import { Button, Menu, Popover, PageHeader } from 'antd';
import styles from './Layout.module.scss';
import { Query } from '@apollo/client/react/components';
import {
 HeartFilled,
 HeartOutlined,
 MailOutlined,
 ShoppingCartOutlined,
 ShoppingFilled,
 UserOutlined,
} from '@ant-design/icons';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Badge from '../Badge/Badge';

export default function Layout({ children }) {
 const router = useRouter();
 const [activeTab, setActiveTab] = useState('profile');
 const [title, setTitle] = useState('Профиль');

 const getUsers = () => {
  <Query
   query={gql(`
		 {
  authorize(login: "mod55", password: "mod55") {
    role,
    token
>>>>>>> 63af4e13853112f0c8b933395587f99e7739902c
  }
}

		 `)}>
   {(loading, error, data) => {
    console.log(data);
   }}
  </Query>;
 };

 useEffect(() => {
  let currentHref = router.pathname;
  console.log(currentHref);
  if (currentHref === '/account/profile') {
   setActiveTab('profile');
   setTitle('Профиль');
  } else if (currentHref === '/account/events') {
   setActiveTab('events');
   setTitle('Мероприятия');
  } else if (currentHref === '/account/events/create') {
   setActiveTab('events');
   setTitle('Создание нового мероприятия');
  } else if (currentHref === '/account/shop') {
   setActiveTab('shop');
   setTitle(
    <div
     style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
     }}>
     Лавка волонтера
     <div
      style={{
       display: 'flex',
       justifyContent: 'space-around',
       alignItems: 'center',
      }}>
      <Popover
       title="Избранное"
       content={() => {
        return (
         <div style={{ display: 'grid', gap: '15px' }}>
          <CartRow></CartRow>
          <CartRow></CartRow>
         </div>
        );
       }}
       placement="bottomLeft">
       <Button type="text">
        <HeartFilled />
        Избранное
       </Button>
      </Popover>
      <Popover
       title="Корзина"
       content={() => {
        return (
         <div style={{ display: 'grid', gap: '15px' }}>
          <CartRow></CartRow>
          <CartRow></CartRow>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
           <Button style={{ width: 'fit-content' }} type={'primary'}>
            Оформить заказ
           </Button>
          </div>
         </div>
        );
       }}
       placement="bottomLeft">
       <Button type="text">
        <ShoppingFilled />
        Корзина
       </Button>
      </Popover>
      <Badge count={123} />
     </div>
    </div>
   );
  } else if (currentHref === '/account/events/[eventId]') {
   setActiveTab('events');
   setTitle(
    <PageHeader onBack={() => router.push('/account/events')} title="Событие" />
   );
  } else {
   //	 тут ?
  }
 }, [router.pathname]);

 return (
  <div className={styles.parent}>
   <div>
    <Header />
   </div>
   <div className={styles.content}>
    <div style={{ flex: '0 0 250px' }}>
     <Menu style={{ height: '100%' }} selectedKeys={[activeTab]}>
      <div style={{ height: '20px' }}></div>
      <Menu.Item
       onClick={() => {
        router.push('/account/profile');
       }}
       key={'profile'}
       icon={<UserOutlined />}>
       Профиль
      </Menu.Item>
      <Menu.Item
       onClick={() => {
        router.push('/account/events');
       }}
       key={'events'}
       icon={<MailOutlined />}>
       Мероприятия
      </Menu.Item>
      <Menu.Item
       onClick={() => {
        router.push('/account/shop');
       }}
       key={'shop'}
       icon={<ShoppingCartOutlined />}>
       Лавка волонтера
      </Menu.Item>
     </Menu>
    </div>
    <div
     style={{
      padding: '30px',
      flex: '1 1 100%',
      overflow: 'auto',
      margin: '0 auto',
      paddingBottom: '100px',
      display: 'block',
      backgroundColor: '#f9f9f9',
     }}>
     <h2>{title}</h2>
     <div style={{ height: '50px' }}></div>
     <div>{children}</div>
    </div>
   </div>
  </div>
 );
}

const CartRow = (e) => {
 return (
  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
   <img
    style={{ objectFit: 'cover' }}
    height={50}
    width={50}
    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    alt=""
   />
   <div className={styles.cartRowDesc} style={{}}>
    <span>Тест какой-то</span>
    <br />
    <div>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae dolorum
     hic nesciunt, officiis pariatur!
    </div>
   </div>
   <div>
    <HeartFilled />
    <HeartOutlined />
   </div>
  </div>
 );
};
