import styles from './Header.module.scss'

export default function Header(){

	return(
		<div className={styles.parent}>
			<span>Главная</span>
			{/*<span>Топ компаний</span>*/}
			{/*<span>Топ организаций</span>*/}
		</div>
	)
}