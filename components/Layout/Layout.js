import Header from '../Header/Header';
import {Button, Menu} from 'antd';
import styles from './Layout.module.scss';
import {HeartFilled, MailOutlined, ShoppingCartOutlined, ShoppingFilled, UserOutlined,} from '@ant-design/icons';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Badge from '../Badge/Badge';

export default function Layout({children}) {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState('profile');
	const [title, setTitle] = useState('Профиль');

	useEffect(() => {
		let currentHref = router.pathname;
		if (currentHref === '/account/profile') {
			setActiveTab('profile');
			setTitle('Профиль');
		} else if (currentHref === '/account/events') {
			setActiveTab('events');
			setTitle('Мероприятия');
		} else if (currentHref === '/account/events/create') {
			setActiveTab('events');
			setTitle('Создание нового мероприятия');
		} else if (currentHref === '/account/shop') {
			setActiveTab('shop');
			setTitle(
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					Лавка волонтера
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
						}}>
						<Button type="text">
							<HeartFilled/>
							Избранное
						</Button>
						<Button type="text">
							<ShoppingFilled/>
							Корзина
						</Button>
						<Badge count={123}/>
					</div>
				</div>
			);
		} else {
			//	 тут ?
		}
	}, [router.pathname]);

	return (
		<div className={styles.parent}>
			<div>
				<Header/>
			</div>
			<div className={styles.content}>
				<div style={{flex: '0 0 250px'}}>
					<Menu style={{height: '100%'}} selectedKeys={[activeTab]}>
						<Menu.Item
							onClick={() => {
								router.push('/account/profile');
							}}
							key={'profile'}
							icon={<UserOutlined/>}>
							Профиль
						</Menu.Item>
						<Menu.Item
							onClick={() => {
								router.push('/account/events');
							}}
							key={'events'}
							icon={<MailOutlined/>}>
							Мероприятия
						</Menu.Item>
						<Menu.Item
							onClick={() => {
								router.push('/account/shop');
							}}
							key={'shop'}
							icon={<ShoppingCartOutlined/>}>
							Лавка волонтера
						</Menu.Item>
					</Menu>
				</div>
				<div style={{
					padding: '30px',
					marginBottom: '50px',
					flex: "1 1 100%",
					overflow: "hidden",
					margin: "0 auto",
					display: "block"
				}}>
					<h2>{title}</h2>
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
}
