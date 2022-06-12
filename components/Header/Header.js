import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/MainContext';
import { Button, Input, Popover } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const { Search } = Input;

export default function Header({ disableButtons }) {
 const [state, setState] = useAuth();
 const router = useRouter();

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
         <Button onClick={() => setState({ isLoggedIn: false })}>Выйти</Button>
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
