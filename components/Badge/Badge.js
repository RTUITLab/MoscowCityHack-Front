import styles from './Badge.module.scss';

export default function Badge(props) {
 return (
  <div>
   <div className={styles.badgeWrapper}>
    <img alt="badge" src={'/images/badge.png'} width="28px"></img>
    <span style={{ marginLeft: '10px' }}>{props.count}</span>
   </div>
  </div>
 );
}
