import styles from '../styles/LoginPage.module.scss';
import { Button, DatePicker, Divider, Form, Input, Select, Tabs } from 'antd';
import React, { useState } from 'react';
import { useAuth } from '../contexts/MainContext';
import { useRouter } from 'next/router';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { sendData } from '../services';

const { TabPane } = Tabs;
const { Option } = Select;

export default function LoginPage() {
 const [state, setState] = useAuth();
 const [accountType, setAccountType] = useState('person');
 const [loading, setLoading] = useState(false);
 const router = useRouter();

 async function onFinish(form, type) {
  if (type == 'login') {
   setLoading(true);

   setState({ isLoggedIn: true });
   router.push('/account');
  } else if (type === 'register') {
   setLoading(true);
   sendData(type, form)
    .then((e) => {
     console.log(e.data.createCompany.id);
     router.push('/account');
    })
    .catch((e) => {
     setLoading(false);
     setState({ isLoggedIn: true });
    });
  }
 }

 return (
  <div className={styles.container}>
   <div className={styles.card}>
    <Tabs disabled={loading} defaultActiveKey="2">
     <TabPane tab="Авторизация" key="1">
      {
       //Login form
      }
      <Form
       colon={false}
       disabled={loading}
       name="loginForm"
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

       <Form.Item noStyle={true}>
        <Button
         style={{
          display: 'block',
          margin: '0 auto',
         }}
         type="primary"
         size="large"
         htmlType="submit">
         Войти
        </Button>
       </Form.Item>
      </Form>
     </TabPane>
     <TabPane tab="Регистрация" key="2">
      {
       //Register form
      }
      <Form
       colon={false}
       labelWrap
       labelAlign="left"
       disabled={loading}
       name="registerForm"
       labelCol={{
        span: 6,
       }}
       wrapperCol={{
        span: 17,
       }}
       initialValues={{
        accountType: 'person',
       }}
       onFinish={(form) => onFinish(form, 'register')}
       autoComplete="on">
       <Form.Item
        name="accountType"
        wrapperCol={{
         offset: 0,
         span: 24,
        }}>
        <Select
         size={'large'}
         style={{ width: 'calc(100% - 27px)' }}
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
          <Input size={'large'}></Input>
         </Form.Item>
         <Form.Item
          rules={[
           {
            required: true,
            message: 'Введите фамилию',
           },
          ]}
          label="Фамилия"
          name="surname">
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
          label="Дата рождения">
          <DatePicker
           style={{ width: '100%' }}
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

       <Form.Item noStyle={true}>
        <Button
         loading={loading}
         htmlType="submit"
         type={'primary'}
         size="large"
         style={{
          display: 'block',
          margin: '0 auto',
         }}>
         Зарегистрироваться
        </Button>
       </Form.Item>
      </Form>
     </TabPane>
    </Tabs>
   </div>
  </div>
 );
}

LoginPage.prototype.type = 'LoginPage';
