import styles from '../../styles/form-create.module.scss'
import {Button, Divider, Input, Radio, Space, Typography} from "antd";
import Header from "../../components/Header/Header";
import {useState} from "react";

const {Title} = Typography

export default function CreateEventsAll() {
	const [part, setPart] = useState(0)

	const [state, editState]=useState({
	})

	const setState=(e)=>{editState(prevState => ({...prevState,...e}))}


	const firstPart = (
		<>
			<section>
				<h3>Заявитель</h3>
				<Input onChange={(e)=>setState({fio:e})} size={"large"} placeholder={"ФИО"}></Input>
			</section>
			<section>
				<h3>Электронная почта</h3>
				<Input onChange={(e)=>setState({email:e})} size={"large"} type={"email"}></Input>
			</section>
			<section>
				<h3>Телефон</h3>
				<Input onChange={(e)=>setState({tel:e})} size={"large"} type={"tel"} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							 required></Input>
			</section>
			<section>
				<h3>Заявление подает</h3>
				<Radio.Group onChange={(e)=>setState({face:e})}>
					<Space direction="vertical">
						<Radio value={"person"}>Физическое лицо</Radio>
						<Radio value={"company"}>Юридическое лицо</Radio>
					</Space>
				</Radio.Group>
			</section>
			<section>
				<Button onClick={() => {
					console.log(state)
					setPart(part + 1)
				}} type={"primary"} size={"large"}>Продолжить</Button>
			</section>
		</>
	)

	const secondPart = (
		<>

		</>
	)

	return (
		<div>
			<Header/>
			<div className={styles.parent}>
				<div className={styles.content}>
					<header>
						<h1>Создание заявки</h1>
						<Divider/>
						{part === 0 ? <h4 style={{margin: "0", color: "gray"}}>Шаг {part + 1}</h4> : (
							<div style={{display:"flex", alignItems:"center", gap:"7px"}}>
								<h4 style={{margin:"0", color:"#008844"}}>Шаг 1</h4>
								<img src="/images/done.svg" alt=""/>
							</div>
						)}
						<h2>{part === 0 ? "Данные о заявителе" : (
							<>
								Оформление заявки
							</>
						)}</h2>
					</header>
					<main className={styles.main}>
						{part === 0 ? firstPart : (secondPart)}
					</main>
					{part === 0 ? <footer style={{marginTop: "40px"}}>
						<h4 style={{margin: "0", color: "gray"}}>Шаг {part + 2}</h4>
						<h2 style={{margin: "0", color: "gray"}}>{part === 0 ? "Оформление заявки" : (
							<></>
						)}</h2>
					</footer> : null}
				</div>
			</div>
		</div>
	)
}


CreateEventsAll.prototype.type = "form"