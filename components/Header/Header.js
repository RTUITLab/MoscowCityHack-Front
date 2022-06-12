import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import MainContext from '../../contexts/MainContext';
import { Popover, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

export default function Header({ disableButtons }) {
 const [state, useState] = useContext(MainContext);
 const router = useRouter();

 return (
  <div className={styles.parent}>
   {!disableButtons ? (
    <>
     <Button
      type="text"
      style={{ display: 'flex', color: 'white' }}
      onClick={() => {
       router.push('/');
      }}>
      Главная
     </Button>
     <Popover
      title={state.user.name}
      content={() => {
       return (
        <div style={{ display: 'grid', gap: '15px' }}>
         <Button>Настройки</Button>
         <Button>Выйти</Button>
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
    </>
   ) : null}
  </div>
 );
}
