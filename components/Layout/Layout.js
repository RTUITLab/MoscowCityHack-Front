import Header from "../Header/Header";
import {Menu} from "antd";
import styles from './Layout.module.scss'
import {MailOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";

export default function Layout({children}) {
	return (
		<div className={styles.parent}>
			<div>
				<Header/>
			</div>
			<div className={styles.content}>
				<div>
					<Menu
						inlineCollapsed={false}
					>
						<Menu.Item icon={<UserOutlined/>}>Профиль</Menu.Item>
						<Menu.Item icon={<MailOutlined/>}>Проекты</Menu.Item>
						<Menu.Item icon={<ShoppingCartOutlined/>}>Лавка волонтера</Menu.Item>
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