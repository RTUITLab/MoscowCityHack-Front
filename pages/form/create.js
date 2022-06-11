import styles from '../../styles/form-create.module.scss'
import {Button, Divider, Input, Radio, Select, Slider, Space, Typography} from "antd";
import Header from "../../components/Header/Header";
import React, {useState} from "react";
import Tags from "../../components/Tags/Tags";
import {district} from "../../utils/data";

const {Title} = Typography
const {Option} = Select
const {TextArea} = Input

export default function CreateEventsAll() {
	const [part, setPart] = useState(0)

	const [tags, setTags] = useState([{title: "Фестиваль", active: false}, {
		title: "НКО", active: false
	}, {title: "Культура", active: false}, {title: "Экология", active: false}, {
		title: "Общество", active: false
	}, {title: "Мастер-класс", active: false}, {title: "Выставка", active: false}, {
		title: "Конкурс", active: false
	}, {title: "Ярмарка", active: false}, {title: "Спорт", active: false}, {
		title: "Дети и молодежь", active: false
	}, {title: "Донорство", active: false}, {title: "Животные", active: false},])

	const onTagClick = (i) => {
		let newTags = tags
		newTags[i].active = !newTags[i].active
		setTags(() => ([...[], ...newTags]))
	}

	const [state, editState] = useState({})

	const setState = (e) => {
		editState(prevState => ({...prevState, ...e}))
	}

	const validateButton = () => {
		if (part === 0) {
			return !(Object.keys(state).length >= 4)
		} else {

		}
	}

	const firstPart = (<>
		<section>
			<h3>Заявитель</h3>
			<Input onChange={(e) => setState({fio: e.target.value})} size={"large"} placeholder={"ФИО"}></Input>
		</section>
		<section key={"email"}>
			<h3>Электронная почта</h3>
			<Input onChange={(e) => setState({email: e.target.value})} size={"large"} type={"email"}></Input>
		</section>
		<section>
			<h3>Телефон</h3>
			<Input onChange={(e) => setState({tel: e.target.value})} size={"large"} type={"tel"}
						 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						 required></Input>
		</section>
		<section>
			<h3>Заявление подает</h3>
			<Radio.Group onChange={(e) => setState({face: e.target.value})}>
				<Space direction="vertical">
					<Radio value={"person"}>Физическое лицо</Radio>
					<Radio value={"company"}>Юридическое лицо</Radio>
				</Space>
			</Radio.Group>
		</section>
		<section>
			<Button onClick={() => {
				setPart(part + 1)
			}} type={"primary"} size={"large"} disabled={validateButton()}>Продолжить</Button>
		</section>
	</>)

	const secondPart = (<>
		<section>
			<h3>Название мероприятия</h3>
			<Input size={"large"}></Input>
		</section>
		<section>
			<h3>Направления</h3>
			<main style={{display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "500px"}}>
				{tags.map((e, i) => {
					return (<Button onClick={() => {
						onTagClick(i)
					}} key={i.toString()} icon={e.icon} active={e.active.toString()}>{e.title}</Button>)
				})}
			</main>
		</section>
		<section>
			<h3>Тип проведения</h3>
			<Radio.Group>
				<Radio value={1}>Онлайн</Radio>
				<Radio value={2}>Оффлайн</Radio>
			</Radio.Group>
		</section>
		<section style={{maxWidth: "320px"}}>
			<h3>Возрастная группа</h3>
			<div style={{maxWidth: "300px", overflow: "hidden"}}>
				<Slider defaultValue={[20, 50]} range min={5} max={60}/>
			</div>
		</section>
		<section>
			<h3>Тэги</h3>
			<div style={{maxWidth: "300px", width: "fit-content", margin: "0px"}}>
				<Tags></Tags>
			</div>
		</section>
		<section>
			<h3>Адрес</h3>
			<Input size={"large"}></Input>
		</section>
		<section style={{maxWidth: "350px"}}>
			<h3>Район Москвы</h3>
			<Select placeholder={"Район Москвы"} size={"large"} style={{width: "100%"}}>
				{district.map((e)=>{
					return <React.Fragment key={e.name}><Option value={e.name}>{e.title}</Option></React.Fragment>
				})}
			</Select></section>
		<section style={{display: "flex", gap: "15px", width: "100%", maxWidth: "900px"}}>
			<div>
				<h4>Дата</h4>
				<Input type={"date"}></Input>
			</div>
			<div>
				<h4>Время начала</h4>
				<Input type={"time"}></Input>
			</div>
			<div>
				<h4>Время окончания</h4>
				<Input type={"time"}></Input>
			</div>
		</section>
		<section>
			<h3>Описание задач</h3>
			<TextArea placeholer={"Опишите, какие задачи предстоит решать волонтеру"}></TextArea>
		</section>
		<section>
			<h3>Описание требований</h3>
			<TextArea placeholer={"Опишите требования к вашей задаче"}></TextArea>
		</section>
		<section>
			<h3>Описание опций</h3>
			<TextArea placeholer={"Описание предоставляемых опций"}></TextArea>
		</section>

	</>)

	return (<div>
		<Header/>
		<div className={styles.parent}>
			<div className={styles.content}>
				<header>
					<h1>Создание заявки</h1>
					<Divider/>
					{part === 0 ? <h4 style={{margin: "0", color: "gray"}}>Шаг {part + 1}</h4> : (
						<div style={{display: "flex", alignItems: "center", gap: "7px"}}>
							<h4 style={{margin: "0", color: "#008844"}}>Шаг 1</h4>
							<img src="/images/done.svg" alt=""/>
						</div>)}
					<h2>{part === 0 ? "Данные о заявителе" : (<>
						Оформление заявки
					</>)}</h2>
				</header>
				<main className={styles.main}>
					{part === 0 ? firstPart : secondPart}
				</main>
				{part === 0 ? <footer style={{marginTop: "40px"}}>
					<h4 style={{margin: "0", color: "gray"}}>Шаг {part + 2}</h4>
					<h2 style={{margin: "0", color: "gray"}}>{part === 0 ? "Оформление заявки" : ("")}</h2>
				</footer> : null}
			</div>
		</div>
	</div>)
}


CreateEventsAll.prototype.type = "form"

