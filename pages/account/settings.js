import styles from '../../styles/account-settings.module.scss';
import { Button, Input } from 'antd';
import { useRouter } from 'next/router';

export default function AccountSettings() {
 const router = useRouter();

 return (
  <div>
   <div className={styles.parentContainer}>
    <div className={styles.leftContainer}>
     <div>
      <h3>Имя</h3>
      <Input size={'large'}></Input>
     </div>
     <div>
      <h3>Фамилия</h3>
      <Input size={'large'}></Input>
     </div>
     <div>
      <h3>Дата рождения</h3>
      <Input size={'large'} type={'date'}></Input>
     </div>
     <div>
      <h3>Логин</h3>
      <Input size={'large'}></Input>
     </div>
     <div>
      <h3>Пароль</h3>
      <Input size={'large'} type={'password'}></Input>
     </div>
    </div>
    <div className={styles.rightContainer}>
     <div
      style={{
       display: 'grid',
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
      }}>
      <div>
       <h3>Обложка</h3>
       <div className={styles.cover}>
        <img
         src="https://avatars.mds.yandex.net/i?id=a4a6ad4d99a96c4f865ee6db4e5409b6-4303509-images-thumbs&n=13"
         alt=""
        />
        <div className={styles.button}>
         <Button>Изменить аватарку</Button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Button
    onClick={() => {
     router.push('/account');
    }}
    style={{ marginTop: '50px' }}
    size={'large'}
    type={'primary'}>
    Сохранить
   </Button>
  </div>
 );
}
