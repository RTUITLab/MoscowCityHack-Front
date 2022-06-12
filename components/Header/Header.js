import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/MainContext';
import { useEffect, useState } from 'react';
import { Button, Input, Popover } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { TokenManager } from '../../services/TokenManager';

export default function Header({ disableButtons }) {
 const [state, setState] = useAuth();
 const router = useRouter();
 const [search, setSearchString] = useState('');

 useEffect(() => {
  setSearchString('');
 }, [router.pathname]);

 return (
  <header className={styles.parent}>
   {!disableButtons ? (
    <div className={styles.buttonContainer}>
     <div style={{ display: 'flex', gap: '50px' }}>
      <Button
       type="text"
       style={{ display: 'flex', color: 'white' }}
       onClick={() => {
        router.push('/');
       }}>
       <span style={{ fontSize: '1.2em', letterSpacing: '1px' }}>Главная</span>
      </Button>
      {router.pathname !== '/account/events' ? (
       <Input
        value={search}
        onChange={(e) => {
         setSearchString(e.target.value);
         let current = e.target.value;
         if (e.target.value) {
          setTimeout(() => {
           if (current === e.target.value) {
            router.push('/account/events?search=' + e.target.value);
           }
          }, 500);
         }
        }}
        enterButton
        placeholder="Найти доброе дело"
        allowClear
        style={{ width: 250, color: 'black' }}
       />
      ) : null}
     </div>
     <Popover
      title={state.user.name}
      content={() => {
       return (
        <div style={{ display: 'grid', gap: '15px' }}>
         <Button
          onClick={() => {
           router.push('/account/settings');
          }}>
          Настройки
         </Button>
         <Button
          onClick={() => {
           setState({ isLoggedIn: false, user: {} });
           new TokenManager().deleteToken();
          }}>
          Выйти
         </Button>
        </div>
       );
      }}
      placement="bottom">
      <Button type="text" className={styles.accountButton}>
       <img src="/images/avatar.svg" width={30} />
       <div>{state.user.name}</div>
       <ArrowDownOutlined className={styles.arrow} />
      </Button>
     </Popover>
     {/*<span>Топ компаний</span>*/}
     {/*<span>Топ организаций</span>*/}
    </div>
   ) : null}
  </header>
 );
}
