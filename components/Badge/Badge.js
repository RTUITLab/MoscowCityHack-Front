import styles from './Badge.module.scss';
import badge from '../../public/images/badge.png';
import Image from 'next/image';

export default function Badge(props) {
 return (
  <div>
   <div className={styles.badgeWrapper}>
    <Image
     alt="badge"
     src={badge}
     width="48"
     height="55"
     objectFit="cover"></Image>
    <span>{props.count}</span>
   </div>
  </div>
 );
}
