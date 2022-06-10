import Header from "../Header/Header";
import {Menu} from "antd";
import styles from './Layout.module.scss'

export default function Layout({children}){
	return(
		<div className={styles.parent}>
			<div>
				<Header/>
			</div>
			<div className={styles.content}>
				<div>
					<Menu>
						<Menu.Item>item 1</Menu.Item>
						<Menu.Item>item 2</Menu.Item>
						<Menu.SubMenu title="sub menu">
							<Menu.Item>item 3</Menu.Item>
						</Menu.SubMenu>
					</Menu>
				</div>
				<div>
					<h2>Заголовок</h2>
					{children}
				</div>
			</div>
		</div>
	)
}