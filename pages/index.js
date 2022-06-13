import Header from '../components/Header/Header';
import st from '../styles/index.module.scss';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function IndexPage() {
 const router = useRouter();

 return (
  <div className={st.parentContainer}>
   <div style={{ position: 'fixed', top: '0px', width: '100%' }}>
    <Header disableButtons={true} />
   </div>
   <div
    style={{
     width: '100%',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     height: 'calc(100vh - 50px)',
    }}>
    <div className={st.contentContainer}>
     <div className={st.textContainer}>
      <div>
       <h1>Помогать — легко.</h1>
       <h1>Стоит только начать.</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
       <Button
        onClick={() => {
         router.push('/login');
        }}
        type={'primary'}
        size={'large'}>
        Создать аккаунт
       </Button>
       <Button
        style={{ marginLeft: '15px' }}
        onClick={() => {
         router.push('/login');
        }}
        type={'primary'}
        size={'large'}>
        Войти
       </Button>
       <br />
       <br />
       <Button type="default">
        <Link href={'/form/create'} type={'primary'} size={'large'}>
         Оставить заявку на помощь
        </Link>
       </Button>
      </div>
     </div>
     <div className={st.imageContainer}>
      <img src="/images/firstIcon.svg" alt="" />
     </div>
    </div>
   </div>
  </div>
 );
}

IndexPage.prototype.type = 'indexPage';
