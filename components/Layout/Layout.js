import Header from '../Header/Header';
import { Button, Divider, Menu, Modal, PageHeader, Popover } from 'antd';
import styles from './Layout.module.scss';
import {
 DeleteOutlined,
 HeartFilled,
 MailOutlined,
 ReadOutlined,
 ShoppingCartOutlined,
 ShoppingFilled,
 UsergroupDeleteOutlined,
 UserOutlined,
 WalletOutlined,
} from '@ant-design/icons';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Badge from '../Badge/Badge';
import { useAuth } from '../../contexts/MainContext';

export default function Layout({ children }) {
 const router = useRouter();
 const [activeTab, setActiveTab] = useState('profile');
 const [title, setTitle] = useState('Профиль');
 const [state, setState] = useAuth();

 useEffect(() => {
  let currentHref = router.pathname;
  if (currentHref === '/account') {
   setActiveTab('profile');
   setTitle('Профиль');
  } else if (currentHref === '/account/achievements') {
   setActiveTab('profile');
   setTitle(
    <PageHeader onBack={() => router.push('/account')} title="Достижения" />
   );
  } else if (currentHref === '/account/events') {
   setActiveTab('events');
   setTitle('Мероприятия');
  } else if (currentHref === '/account/events/create') {
   setActiveTab('events');
   setTitle('Создание нового мероприятия');
  } else if (currentHref === '/account/shop') {
   setActiveTab('shop');
   setTitle(<ShopHeader />);
  } else if (currentHref === '/account/friends') {
   setActiveTab('friends');
   setTitle('Друзья');
  } else if (currentHref === '/account/bonuses') {
   setActiveTab('bonuses');
   setTitle('История начисления баллов');
  } else if (currentHref === '/account/learning') {
   setActiveTab('learning');
   setTitle('Центр обучения');
  } else if (currentHref === '/account/settings') {
   setActiveTab('profile');
   setTitle('Редактирование профиля');
  } else if (currentHref === '/account/events/requests') {
   setActiveTab('events');
   setTitle('Заявки на публикацию');
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
        router.push('/account');
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
        router.push('/account/friends');
       }}
       key={'friends'}
       icon={<UsergroupDeleteOutlined />}>
       Друзья
      </Menu.Item>
      <Menu.Item
       onClick={() => {
        router.push('/account/shop');
       }}
       key={'shop'}
       icon={<ShoppingCartOutlined />}>
       Лавка волонтера
      </Menu.Item>
      <Menu.Item
       onClick={() => {
        router.push('/account/bonuses');
       }}
       key={'bonuses'}
       icon={<WalletOutlined />}>
       Баллы добра
      </Menu.Item>
      <Menu.Item
       onClick={() => {
        router.push('/account/learning');
       }}
       key={'learning'}
       icon={<ReadOutlined />}>
       Обучение
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

    <Modal
     title="Окно подтверждения покупки"
     visible={state?.showCart || false}
     onOk={() => {
      setState({ showCart: false });
     }}
     onCancel={() => {
      setState({ showCart: false });
     }}>
     {state.user.points >= state.shop.totalCardPrice ? (
      <div style={{ color: 'green' }}>
       На вашем счету достаточное количество баллов! Нажмите ОК для продолжения
      </div>
     ) : (
      <div style={{ color: 'red' }}>
       На вашем счету недостаточное количество баллов! Пожалуйста, выберите
       другой товар
      </div>
     )}
    </Modal>
   </div>
  </div>
 );
}

function CartRow(props) {
 const [state, setState] = useAuth();
 let data = props.data;
 let inElem = props.inElem;

 function deleteFromCart() {
  let id = data.id;
  let curItems = state.shop.items;
  let indexElem = curItems.findIndex((el) => el.id === id);
  curItems[indexElem].inCart = false;
  setState({
   shop: {
    items: curItems,
    totalCardPrice: state.shop.totalCardPrice - curItems[indexElem].price,
   },
  });
 }

 return (
  <div
   style={{
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
   }}>
   <img
    style={{ objectFit: 'cover' }}
    height={50}
    width={50}
    src={data.imgSrc}
    alt=""
   />
   <div
    className={styles.cartRowDesc}
    style={{
     width: '100%',
    }}>
    <span>{data.title}</span>
    <br />
    <div>{data.description}</div>
   </div>
   {inElem === 'card' ? (
    <div>
     <DeleteOutlined onClick={deleteFromCart} />
    </div>
   ) : (
    <></>
   )}
  </div>
 );
}

const ShopHeader = () => {
 const [state, setState] = useAuth();
 return (
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
        {state.shop.items
         .filter((data) => data.liked)
         .map((data, i) => (
          <CartRow key={i} data={data} inElem={'likes'}></CartRow>
         ))}
       </div>
      );
     }}
     placement="bottomLeft">
     <Button
      type="text"
      style={{
       display: 'flex',
       alignItems: 'center',
       fontSize: '0.75em',
      }}>
      <HeartFilled />
      Избранное
     </Button>
    </Popover>
    <Popover
     title="Корзина"
     content={() => {
      return (
       <div style={{ display: 'grid', gap: '15px' }}>
        {state.shop.items
         .filter((data) => data.inCart)
         .map((data, i) => (
          <CartRow key={i} data={data} inElem={'card'}></CartRow>
         ))}
        <div
         style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
         }}>
         <div
          style={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
          }}>
          <span>Итого:</span>
          <span>{state.shop.totalCardPrice}</span>
         </div>
         <Button
          style={{ width: '100%', marginTop: '3%' }}
          type={'primary'}
          onClick={() => {
           setState({ showCart: true });
          }}>
          Перейти к оформлению
         </Button>
        </div>
       </div>
      );
     }}
     placement="bottomLeft">
     <Button
      type="text"
      style={{ display: 'flex', alignItems: 'center', fontSize: '0.75em' }}>
      <ShoppingFilled />
      Корзина
     </Button>
    </Popover>
    <Divider style={{ marginRight: '25px' }} type="vertical" />
    <Badge count={state.user.points} />
   </div>
  </div>
 );
};
