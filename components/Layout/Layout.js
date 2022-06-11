import Header from "../Header/Header";
import {Menu} from "antd";
import styles from './Layout.module.scss'
import {MailOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import MainContext from "../../contexts/MainContext";

export default function Layout({children}) {
	const router = useRouter()
	const [activeTab, setActiveTab] = useState("profile")
	const [title, setTitle]=useState("Профиль")

	useEffect(() => {
		let currentHref = router.pathname
		if (currentHref===("/account/profile")) {
			setActiveTab("profile")
			setTitle("Профиль")
		} else if (currentHref===("/account/events")) {
			setActiveTab("events")
			setTitle("Мероприятия")
		} else if (currentHref===("/account/events/create")) {
			setActiveTab("events")
			setTitle("Создание нового мероприятия")
		}else {
			//	 тут магаз
		}
	}, [router.pathname])

	return (
		<div className={styles.parent}>
			<div>
				<Header/>
			</div>
			<div className={styles.content}>
				<div style={{flex:"0 0 250px"}}>
					<Menu
						style={{height:"100%"}}
						selectedKeys={[activeTab]}
					>
						<Menu.Item onClick={() => {
							router.push("/account/profile")
						}} key={"profile"} icon={<UserOutlined/>}>Профиль</Menu.Item>
						<Menu.Item onClick={() => {
							router.push("/account/events")
						}} key={"events"} icon={<MailOutlined/>}>Мероприятия</Menu.Item>
						<Menu.Item key={"shop"} icon={<ShoppingCartOutlined/>}>Лавка волонтера</Menu.Item>
					</Menu>
				</div>
				<div style={{padding:"30px", marginBottom:"50px"}}>
					<h2>{title}</h2>
					<div >
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}