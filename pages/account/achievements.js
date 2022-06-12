import styles from '../../styles/achievements.module.scss';
import { useAuth } from '../../contexts/MainContext.js';
import { Card } from 'antd';

export default function Achievements() {
 const [state, setState] = useAuth();
 const user = state.user;
 return (
  <div className={styles.parentContainer}>
   {user.achievements.map((ach, i) => (
    <Card key={i} className={styles.achievement}>
     <div>
      <img src={ach.imgSrc} width={100} />
     </div>
     <div className={styles.description}>{ach.description}</div>
    </Card>
   ))}
  </div>
 );
}
