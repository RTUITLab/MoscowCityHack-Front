import styles from './Header.module.scss';
import { useRouter } from 'next/router';

export default function Header({ disableButtons }) {
 const router = useRouter();

 return (
  <div className={styles.parent}>
   {!disableButtons ? (
    <>
     <span
      onClick={() => {
       router.push('/');
      }}>
      Главная
     </span>
     {/*<span>Топ компаний</span>*/}
     {/*<span>Топ организаций</span>*/}
    </>
   ) : null}
  </div>
 );
}
