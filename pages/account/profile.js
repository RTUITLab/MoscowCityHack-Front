import {EditOutlined, EllipsisOutlined, SettingOutlined,} from '@ant-design/icons';
import { Image } from 'antd';
import {Button, Card, Col, Descriptions, Progress, Row, Statistic, Table,} from 'antd';
import React from 'react';
import Badge from '../../components/Badge/Badge';
import styles from '../../styles/profile.module.scss';

const {Meta} = Card;

const CardTitle = () => {
	return (
		<div className={styles.cardTitle}>
			<h3 className={styles.name}>Костик Иванов</h3>
			<div className={styles.status}>
				<Progress percent={70} className={styles.statusBar} showInfo={false}/>
				<div className={styles.statusBarHeader}>200 до след. уровня</div>
				{/*<Badge count={2} />*/}
			</div>
		</div>
	);
};

const Profile = () => {
	const columns = [
		{
			title: 'Доброе дело',
			dataIndex: 'type',
			key: 'Доброе дело',
			render: (text) => <span>{text}</span>,
		},
		{
			title: 'Время работы',
			dataIndex: 'time',
			key: 'Время работы',
			render: (text) => text + ' ч',
		},
		{
			title: 'Дата начала',
			dataIndex: 'timeStart',
			key: 'Дата начала',
		},
		{
			title: 'Дата конца',
			dataIndex: 'timeEnd',
			key: 'Дата конца',
		},
		{
			title: 'Баллы',
			dataIndex: 'points',
			key: 'Баллы',
			render: (points) => <Badge count={points}/>,
		},
	];

	const data = [
		{
			key: '1',
			type: 'Помощь инвалидам',
			time: 4,
			timeStart: '13.01.2022',
			timeEnd: '20.02.2022',
			points: 100,
		},
		{
			key: '2',
			type: 'Помощь инвалидам',
			time: 4,
			timeStart: '13.01.2022',
			timeEnd: '20.02.2022',
			points: 200,
		},
		{
			key: '3',
			type: 'Помощь инвалидам',
			time: 4,
			timeStart: '13.01.2022',
			timeEnd: '20.02.2022',
			points: 350,
		},
	];
	return (
		<div className={styles.profileWrapper}>

			<Card
				className={styles.userCard}
				cover={
					<>
						<CardTitle/>
						<Image

							alt="Ваше фото"
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
						/>
					</>
				}
				actions={[
					<SettingOutlined key="setting"/>,
					<EditOutlined key="edit"/>,
					<EllipsisOutlined key="ellipsis"/>,
				]}>
				<div className={styles.bottomStats}>
					<Descriptions
						column={1}
						labelStyle={{
							fontSize: '1.4em',
						}}
						contentStyle={{
							display: 'flex',
							justifyContent: 'flex-end',
							fontSize: '1.4em',
						}}>
						<Descriptions.Item label="Количество мероприятий">
							<span>{4}</span>
						</Descriptions.Item>
						<Descriptions.Item label="Часов работы">
							<span>{12}</span>
						</Descriptions.Item>
						<Descriptions.Item label="Количество мероприятий">
							<span>{4}</span>
						</Descriptions.Item>
					</Descriptions>
				</div>
			</Card>

			<div className={styles.statsWrapper}>
				<div style={{display:"flex", justifyContent:"flex-start", gap:"30px"}}>
					<div>
						<span style={{color: "rgba(0, 0, 0, 0.45)", fontWeight:"400",fontSize:"20px"}}>Баллы добра</span>
						<div style={{height:"2.5px"}}></div>
						<div style={{display:"flex", marginLeft:"15px", alignItems:"center"}}>
							<Badge/>
							<span style={{fontSize:"2em"}}>26562</span>
						</div>
					</div>
					<div>
						<Statistic
							title={<span style={{fontSize: 1.4 + 'em'}}>Часов работы</span>}
							value={25}
							valueStyle={{fontSize: 2 + 'em'}}
						/>
					</div>
					<div>
						<Statistic
							title={<span style={{fontSize: 1.4 + 'em'}}>Мероприятия</span>}
							value={5}
							valueStyle={{fontSize: 2 + 'em'}}
						/>
					</div>
				</div>
				<Row
					justify="center"
					align="middle"
					style={{marginTop: '5%'}}
					className={styles.tableWrapper}>
					<div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
						<div style={{width: "100%"}}>
							<h3 className={styles.tableHeader}>Последние добрые дела</h3>
						</div>
						<div style={{width: "100%", display: "flex", gap: "10px", justifyContent: "flex-end"}}>
							<Button type="primary">Выгрузить в PDF</Button>
							<Button type="primary">Достижения</Button>
						</div>
					</div>
					<div style={{width:"100%"}}>
						<Table
							columns={columns}
							dataSource={data}
							pagination={{position: ['bottomLeft']}}
						/>
					</div>
				</Row>
			</div>
		</div>
	);
};

export default Profile;
