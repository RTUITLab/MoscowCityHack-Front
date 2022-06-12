import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import MainContext from '../../contexts/MainContext';
import { Popover, Button, Input, Space } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function Header({ disableButtons }) {
 const [state, useState] = useContext(MainContext);
 const router = useRouter();

 return (
  <header className={styles.parent}>
   {!disableButtons ? (
    <>
     <div style={{ display: 'flex', gap: '50px' }}>
      <Button
       type="text"
       style={{ display: 'flex', color: 'white' }}
       onClick={() => {
        router.push('/');
       }}>
       <span style={{ fontSize: '1.4em', letterSpacing: '1px' }}>Главная</span>
      </Button>
      <Search
       enterButton
       placeholder="Найти доброе дело"
       allowClear
       onSearch={() => {}}
       style={{ width: 250, color: 'black' }}
      />
     </div>
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
    </div>
   ) : null}
  </header>
 );
}
