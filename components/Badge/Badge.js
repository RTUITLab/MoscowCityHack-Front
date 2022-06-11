import styles from './Badge.module.scss';
export default function Badge(props) {
 return <div className={styles.badge}>{props.count}</div>;
}
