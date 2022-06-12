import styles from '../../styles/achievements.module.scss';
import MainContext from '../../contexts/MainContext.js';
import { useContext } from 'react';

export default function Achievements() {
 const [state, setState] = useContext(MainContext);
 const user = state.user;
 return (
  <div className={styles.parentContainer}>
   {user.achievements.map((ach, i) => (
    <div key={i} className={styles.achievement}>
     <img src={ach.imgSrc} width={100} />
     <div className={styles.description}>{ach.description}</div>
    </div>
   ))}
  </div>
 );
}
