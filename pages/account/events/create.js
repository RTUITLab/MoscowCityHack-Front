import {Button, Input, Select} from "antd";
import styles from '../../../styles/events-create.module.scss'
import {useState} from "react";
import { Radio } from 'antd';
const {TextArea} = Input;
import {Slider} from "antd";
import Tags from "../../../components/Tags/Tags";

const Option = Select

export default function CreateEvents({createdBy}) {
	const [tags, setTags] = useState(
		[
			{title: "Фестиваль", active: false},
			{title: "НКО", active: false},
			{title: "Культура", active: false},
			{title: "Экология", active: false},
			{title: "Общество", active: false},
			{title: "Мастер-класс", active: false},
			{title: "Выставка", active: false},
			{title: "Конкурс", active: false},
			{title: "Ярмарка", active: false},
			{title: "Спорт", active: false},
			{title: "Дети и молодежь", active: false},
			{title: "Донорство", active: false},
			{title: "Животные", active: false},
		]
	)

	const onTagClick = (i) => {
		let newTags = tags
		newTags[i].active = !newTags[i].active
		setTags(() => ([...[], ...newTags]))
	}

	return (
		<div className={styles.parent}>
			<header>
				<h3>Основная информация</h3>
			</header>
			<main className={styles.mainContainer}>
				<section className={styles.mainSection}>
					<section>
						<header>
							<h4>Направления</h4>
						</header>
						<main className={styles.tags}>
							{tags.map((e, i) => {
								return (
									<Button onClick={() => {
										onTagClick(i)
									}} key={i.toString()} icon={e.icon} active={e.active.toString()}>{e.title}</Button>
								)
							})}
						</main>
					</section>
					<section>
						<Input placeholder={"Название мероприятия"} size={"large"}></Input>
					</section>
					<section>
						<Select placeholder={"Район Москвы"} size={"large"} style={{width: "100%"}}>
							<Option value="center">Центральный</Option>
							<Option value="north">Северный</Option>
							<Option value="north-east">Северо-Восточный</Option>
							<Option value="east">Восточный</Option>
							<Option value="south-east">Юго-Восточный</Option>
							<Option value="south">Южный</Option>
							<Option value="south-west">Юго-Западный</Option>
							<Option value="west">Западный</Option>
							<Option value="north-west">Северо-Западный</Option>
							<Option value="zelenograd">Зеленоградский</Option>
							<Option value="trinity">Троицкий</Option>
							<Option value="novomoskovsky">Новомосковский</Option>
							<Option value="allcity">Вся Москва</Option>
						</Select>
					</section>

					<section className={styles.date}>
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
						<div>
							<h4>Описание задач</h4>
							<TextArea placeholer={"Опишите, какие задачи предстоит решать волонтеру"}></TextArea>
						</div>
					</section>
					<section>
						<div>
							<h4>Описание требований</h4>
							<TextArea placeholer={"Опишите требования к вашей задаче"}></TextArea>
						</div>
					</section>
					<section>
						<div>
							<h4>Описание требований</h4>
							<TextArea placeholer={"Описание предоставляемых опций"}></TextArea>
						</div>
					</section>
					<section>
						<h4>E-Mail для контактов</h4>
						<div>
							<Input placeholder={"E-Mail"} type={"mail"}></Input>
						</div>
					</section>
					{createdBy==="visitor"?(
						<section>
							<h4>E-Mail для контактов</h4>
							<div>
								<Input placeholder={"E-Mail"} type={"mail"}></Input>
							</div>
						</section>
					):(null)}
				</section>
				<section className={styles.mainSection}>
					<section>
						<div style={{display:"grid", justifyContent:"flex-start"}}>
							<h4>Обложка</h4>
							<div className={styles.cover}>
								<img
									src="https://avatars.mds.yandex.net/i?id=a4a6ad4d99a96c4f865ee6db4e5409b6-4303509-images-thumbs&n=13"
									alt=""/>
								<div className={styles.button}>
									<Button >Изменить обложку</Button>
								</div>
							</div>
						</div>
					</section>
					<section>
						<Radio.Group >
							<Radio value={1}>Онлайн</Radio>
							<Radio value={2}>Оффлайн</Radio>
						</Radio.Group>
					</section>
					<section style={{maxWidth:"320px"}}>
						<h4>Возрастная группа</h4>
						<div style={{maxWidth:"300px", overflow:"hidden"}}>
							<Slider defaultValue={[20, 50]} range min={5} max={60}/>
						</div>

					</section>
					<section>
						<h4>Тэги</h4>
						<div style={{maxWidth:"300px", width:"fit-content",margin:"0px"}}>
							<Tags></Tags>
						</div>
					</section>

				</section>

			</main>
			<div style={{marginTop:"30px"}}>
				<Button type={"primary"}>Создать событие</Button>
			</div>
		</div>
	)
}