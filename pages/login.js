import styles from '../styles/LoginPage.module.scss';
import { Button, Divider, Input, Select, Tabs, Form, DatePicker } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../contexts/MainContext';
import { useRouter } from 'next/router';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { sendData } from '../services';

const { TabPane } = Tabs;
const { Option } = Select;

export default function LoginPage() {
 const [state, setState] = useAuth();
 const [accountType, setAccountType] = useState('person');
 const [loading, setLoading] = useState(false);
 const router = useRouter();

 function onFinish(form, type) {
  console.log(form, type);
  if (type == 'login') {
   setLoading(true);

   setState({ isLoggedIn: true });
   router.push('/account');
  } else if (type === 'register') {
   setLoading(true);
   sendData(type, form);
   router.push('/login');
  }
 }

 return (
  <div className={styles.container}>
   <div className={styles.card}>
    <Tabs disabled={loading} defaultActiveKey="2">
     <TabPane tab="Авторизация" key="1">
      <Form
       disabled={loading}
       name="basic"
       labelCol={{
        span: 6,
       }}
       wrapperCol={{
        span: 17,
       }}
       initialValues={{
        remember: true,
       }}
       onFinish={(form) => onFinish(form, 'login')}
       autoComplete="on">
       <Form.Item
        label="Логин"
        name="username"
        rules={[
         {
          required: true,
          message: 'Введите логин',
         },
        ]}>
        <Input size={'large'}></Input>
       </Form.Item>

       <Form.Item
        label="Пароль"
        name="password"
        rules={[
         {
          required: true,
          message: 'Введите пароль',
         },
        ]}>
        <Input.Password
         size={'large'}
         iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
         }
        />
       </Form.Item>

       <Divider />

       <Form.Item
        wrapperCol={{
         offset: 9,
         span: 15,
        }}>
        <Button type="primary" size="large" htmlType="submit">
         Войти
        </Button>
       </Form.Item>
      </Form>
      {/*
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
	*/}
     </TabPane>
     <TabPane tab="Регистрация" key="2">
      <Form
       labelWrap
       labelAlign="left"
       disabled={loading}
       name="basic"
       labelCol={{
        span: 6,
       }}
       wrapperCol={{
        span: 17,
       }}
       initialValues={{
        remember: true,
       }}
       onFinish={(form) => onFinish(form, 'register')}
       autoComplete="on">
       <Form.Item
        name="accountTypeVal"
        wrapperCol={{
         offset: 4,
         span: 16,
        }}>
        <Select
         size={'large'}
         defaultValue="person"
         onChange={(e) => {
          setAccountType(e);
         }}>
         <Option value="person">Физическое лицо</Option>
         <Option value="company">Юридическое лицо</Option>
        </Select>
       </Form.Item>

       {accountType === 'person' ? (
        <>
         <Form.Item
          rules={[
           {
            required: true,
            message: 'Введите имя',
           },
          ]}
          label="Имя"
          name="name">
          <Input disabled={loading} size={'large'}></Input>
         </Form.Item>
         <Form.Item
          rules={[
           {
            required: true,
            message: 'Введите фамилию',
           },
          ]}
          label="Фамилия"
          name="family">
          <Input size={'large'}></Input>
         </Form.Item>
         <Form.Item
          rules={[
           {
            required: true,
            message: 'Введите дату рождения',
           },
          ]}
          name="birthdate"
          label="Дата рождения"
          wrapperCol={{
           offset: 2,
          }}>
          <DatePicker
           placeholder={'Выбрать дату'}
           type={'date'}
           size={'large'}
          />
         </Form.Item>
        </>
       ) : (
        <>
         <Form.Item
          labelWrap
          rules={[
           {
            required: true,
            message: 'Введите название компании',
           },
          ]}
          label="Название компании"
          name="name">
          <Input size={'large'}></Input>
         </Form.Item>
        </>
       )}

       <Form.Item
        label="Логин"
        name="login"
        rules={[
         {
          required: true,
          message: 'Введите логин',
         },
        ]}>
        <Input size={'large'}></Input>
       </Form.Item>

       <Form.Item
        label="Пароль"
        name="password"
        rules={[
         {
          required: true,
          message: 'Введите пароль',
         },
        ]}>
        <Input.Password
         size={'large'}
         iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
         }
        />
       </Form.Item>

       <Divider />

       <Form.Item
        wrapperCol={{
         offset: 6,
         span: 18,
        }}>
        <Button
         loading={loading}
         htmlType="submit"
         type={'primary'}
         size="large">
         Зарегистрироваться
        </Button>
       </Form.Item>
      </Form>
      {/*
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
	  */}
     </TabPane>
    </Tabs>
   </div>
  </div>
 );
}

LoginPage.prototype.type = 'LoginPage';
