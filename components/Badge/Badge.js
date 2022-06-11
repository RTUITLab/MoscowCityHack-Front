import styles from './Badge.module.scss';
import Image from 'next/image';

export default function Badge(props) {
 return (
  <div>
   <div className={styles.badgeWrapper}>
    <img
     alt="badge"
     src={"/images/badge.png"}
     width="28px"
     objectFit="cover"></img>
    <span style={{marginLeft:"10px"}}>{props.count}</span>
   </div>
  </div>
 );
}
