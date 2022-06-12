import styles from '../styles/LoginPage.module.scss';
import { Button, Divider, Input, Select, Tabs } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../contexts/MainContext';
import { useRouter } from 'next/router';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;

export default function Home() {
 const [state, setState] = useAuth();
 const [accountType, setAccountType] = [state.user.accountType, setState]; //!!!
 const [loading, setLoading] = useState(false);
 const router = useRouter();

 function handleClick(from) {
  //reg, login
  setLoading(true);
  setState({ isLoggedIn: true });
  router.push('/account');
 }

 return (
  <div className={styles.container}>
   <div className={styles.card}>
    <Tabs disabled={loading} defaultActiveKey="1">
     <TabPane tab="Авторизация" key="1">
      <div className={styles.page}>
       <Input disabled={loading} placeholder={'Логин'} size={'large'}></Input>
       <Input.Password
        placeholder={'Пароль'}
        size={'large'}
        disabled={loading}
        iconRender={(visible) =>
         visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
       />
       <Divider />
       <Button
        loading={loading}
        onClick={() => {
         handleClick('login');
        }}
        type={'primary'}>
        Войти
       </Button>
      </div>
     </TabPane>
     <TabPane tab="Регистрация" key="2">
      <div className={styles.page}>
       <Select
        disabled={loading}
        size={'large'}
        defaultValue="person"
        onChange={(e) => {
         setAccountType(e);
        }}>
        <Option value="person">Физическое лицо</Option>
        <Option value="company">Юридическое лицо</Option>
       </Select>
       {accountType === 'person' ? (
        <>
         <Input disabled={loading} placeholder={'Имя'} size={'large'}></Input>
         <Input
          disabled={loading}
          placeholder={'Фамилия'}
          size={'large'}></Input>
         <Input
          disabled={loading}
          type={'date'}
          placeholder={'Дата рождения'}
          size={'large'}></Input>
        </>
       ) : (
        <>
         <Input placeholder={'Название компании'} size={'large'}></Input>
        </>
       )}
       <Input disabled={loading} placeholder={'Логин'} size={'large'}></Input>

       <Input.Password
        placeholder={'Пароль'}
        size={'large'}
        disabled={loading}
        iconRender={(visible) =>
         visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
       />
       <Divider />
       <Button
        loading={loading}
        onClick={() => handleClick('reg')}
        type={'primary'}>
        Зарегистрироваться
       </Button>
      </div>
     </TabPane>
    </Tabs>
   </div>
  </div>
 );
}

Home.prototype.type = 'LoginPage';
