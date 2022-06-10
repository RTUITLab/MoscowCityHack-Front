import styles from '../styles/LoginPage.module.scss';
import {Button, Divider, Input, Select, Tabs} from 'antd';
import {useState} from "react";

const {TabPane} = Tabs;
const {Option} = Select;
const onChange = (key) => {
	console.log(key);
};


export default function Home() {
	const [accountType, setAccountType] = useState("person")
	const [loading, setLoading] = useState(false)

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<Tabs disabled={loading} defaultActiveKey="1" onChange={onChange}>
					<TabPane tab="Авторизация" key="1">
						<div className={styles.page}>
							<Input disabled={loading} placeholder={"Логин"} size={"large"}></Input>
							<Input disabled={loading} placeholder={"Пароль"} type={"password"} size={"large"}></Input>
							<Divider/>
							<Button loading={loading} onClick={() => {
								setLoading(true)
							}} type={"primary"}>Войти</Button>
						</div>
					</TabPane>
					<TabPane tab="Регистрация" key="2">
						<div className={styles.page}>
							<Select disabled={loading} size={"large"} defaultValue="person" onChange={(e) => {
								setAccountType(e)
							}}>
								<Option value="person">Физическое лицо</Option>
								<Option value="company">Юридическое лицо</Option>
							</Select>
							{accountType === "person" ? (
								<>
									<Input disabled={loading} placeholder={"Имя"} size={"large"}></Input>
									<Input disabled={loading} placeholder={"Фамилия"} size={"large"}></Input>
								</>
							) : (<>
								<Input placeholder={"Название компании"} size={"large"}></Input>
							</>)}
							<Input disabled={loading} placeholder={"Логин"} size={"large"}></Input>
							<Input disabled={loading} placeholder={"Пароль"} type={"password"} size={"large"}></Input>
							<Divider/>
							<Button loading={loading} onClick={() => {
								setLoading(true)
							}} type={"primary"}>Зарегистрироваться</Button>
						</div>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}
