import {Button, Divider, Input, Select, Space, Table, Tag} from "antd";
import {useRouter} from "next/router";
import styles from '../../../styles/events.module.scss'
import React from 'react'
import {ArrowRightOutlined} from "@ant-design/icons";
import { Checkbox, Col, Row } from 'antd';
import {district, tags} from "../../../utils/data";
import Link from "next/link";

const {Option}=Select

export default function Events() {
	const router = useRouter()

	const test = [{
		name: "Имя аааа",
		date: new Date().getTime(),
		tags: ["fdfdf", "fdfdsf", "fdfdf"],
		district: "Юго-Запад"
	}, {
		name: "Имя аааа",
		date: new Date().getTime(),
		tags: ["fdfdf", "fdfdsf", "fdfdf"],
		district: "Юго-Запад"
	}]

 const columns = [
  {
   title: 'Название',
   dataIndex: 'name',
   key: 'name',
   render: ([text, id] = arr) => (
    <Button
     onClick={() => {
      router.push(`/account/event/${id}`);
     }}>
     {text}
    </Button>
   ),
  },
  {
   title: 'Дата',
   dataIndex: 'date',
   key: 'age',
   render: (e) => {
    return new Date(e).toLocaleDateString('ru');
   },
  },
  {
   title: 'Tags',
   key: 'tags',
   dataIndex: 'tags',
   render: (_, { tags }) => (
    <>
     {tags.map((tag) => {
      let color = tag.length > 5 ? 'geekblue' : 'green';

	const columns = [
		{
			title: 'Название',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Дата',
			dataIndex: 'date',
			key: 'age',
			render: (e) => {
				return new Date(e).toLocaleDateString("ru")
			}
		}, {
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, {tags}) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';

      return (
       <React.Fragment key={tag + Math.random() * 99}>
        <Tag color={color}>{tag.toUpperCase()}</Tag>
       </React.Fragment>
      );
     })}
    </>
   ),
  },
  {
   title: 'Район',
   dataIndex: 'rayon',
   key: 'address',
  },
 ];

						return (
							<React.Fragment key={tag + Math.random() * 99}>
								<Tag color={color}>
									{tag.toUpperCase()}
								</Tag>
							</React.Fragment>
						);
					})}
				</>
			),
		},
		{
			title: 'Район',
			dataIndex: 'district',
			key: 'address',
		},

	];


	return (
		<div className={styles.parentContainer}>
			<div style={{flex: "1 1 100%"}} className={styles.content}>
				<div style={{display: "flex", gap: "10px", width: "100%"}}>
					<div>
						<Input placeholder={"Поиск"}></Input>
					</div>
					<div>
						<Button type={"primary"}>Поиск</Button>
					</div>
					<div style={{display: "flex", gap: "10px", alignItems:"center"}}>
						<Button onClick={() => {
							router.push("/account/events/create")
						}}>Создать мероприятие</Button>
						<Button onClick={() => {
							router.push("/account/events/requests")
						}}>Просмотр заявок</Button>
						<Divider style={{height:"100%"}} type="vertical" />
						<Link href="/account/events/map">Отобразить на карте</Link>
					</div>
				</div>
				<div style={{display: "flex", gap: "15px"}}>
					<Table style={{width: "100%", backgroundColor: "white", padding: "25px", borderRadius: "7px"}}
								 columns={columns} dataSource={test}/>
					<div style={{
						flex: "1 1 25%",
						position: "picker",
						top: "25px",
						backgroundColor: "white",
						padding: "25px",
						display: "flex",
						flexDirection: "column",
						gap: "20px",
						height: "fit-content",
						borderRadius: "7px",
					}}>
						<section>
							<h3>Дата проведения</h3>
							<div style={{display: "flex", alignItems: "center", gap: "10px"}}>
								<Input type={"date"}/>
								<ArrowRightOutlined/>
								<Input type={"date"}/>
							</div>
						</section>
						<section>
							<h3>Время проведения</h3>
							<div style={{display: "flex", alignItems: "center", gap: "10px"}}>
								<Input type={"time"}/>
								<ArrowRightOutlined/>
								<Input type={"time"}/>
							</div>
						</section>
						<section>
							<h3>Время проведения</h3>
							<div style={{display: "flex", alignItems: "center", gap: "10px"}}>
								<Checkbox.Group style={{width: '100%'}} >
									<Space direction="vertical">
										<Checkbox value="online">Онлайн</Checkbox>
										<Checkbox value="offline">Оффлайн</Checkbox>
									</Space>
								</Checkbox.Group>
							</div>
						</section>
						<section>
							<h3>Местоположение</h3>
								<Select placeholder={"Район Москвы"} size={"large"} style={{width: "100%"}}>
									{district.map((e)=>{
										return <React.Fragment key={e.name}><Option value={e.name}>{e.title}</Option></React.Fragment>
									})}
								</Select>
						</section>
						<section>
							<h3>Направления</h3>
							<Select mode="multiple" placeholder={""} size={"large"} style={{width: "100%"}}>
								{tags.map((e)=>{
									return <React.Fragment key={e.name}><Option value={e.name}>{e.title}</Option></React.Fragment>
								})}
							</Select>
						</section>
						<section>
							<h3>Требования</h3>
							<Select placeholder={"Район Москвы"} size={"large"} style={{width: "100%"}}>
								{district.map((e)=>{
									return <React.Fragment key={e.name}><Option value={e.name}>{e.title}</Option></React.Fragment>
								})}
							</Select>
						</section>
					</div>
				</div>

			</div>

		</div>
	)
}