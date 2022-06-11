import styles from './Badge.module.scss';

export default function Badge(props) {

  if(props.type==="level"){
    return(
      <div>
        <div className={styles.badgeWrapper+" "+styles.level}>
          <img
            alt="badge"
            src={"/images/blueBadge.svg"}
            width="55px"
            objectFit="cover"></img>
          <span style={{position:"absolute"}}>{props.count}</span>
        </div>
      </div>
    )
  }
 return (
  <div>
   <div className={styles.badgeWrapper}>
    <img alt="badge" src={'/images/badge.png'} width="28px"></img>
    <span style={{ marginLeft: '10px' }}>{props.count}</span>
   </div>
  </div>
 );
}
