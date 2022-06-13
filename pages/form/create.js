import styles from '../../styles/form-create.module.scss';
import {
 Button,
 DatePicker,
 Divider,
 Input,
 message,
 Radio,
 Select,
 Slider,
 Space,
 TimePicker,
 Typography,
} from 'antd';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import Tags from '../../components/Tags/Tags';
import { district, tags as tagsData } from '../../utils/data';
import { createQuery } from '../../services';
import { useRouter } from 'next/router';

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function CreateEventsAll() {
 const [part, setPart] = useState(0);
 const router = useRouter();
 const [tags, setTags] = useState(tagsData);

 const onTagClick = (i) => {
  let newTags = tags;
  newTags[i].active = !newTags[i].active;
  setTags(() => [...[], ...newTags]);
 };

 const [state, editState] = useState({});

 const setState = (e) => {
  editState((prevState) => ({ ...prevState, ...e }));
 };

 const validateButton = () => {
  if (part === 0) {
   return !(Object.keys(state).length >= 4);
  } else {
  }
 };
 const validateButton2 = () => {
  if (part === 0) {
   return !(Object.keys(state).length >= 4);
  } else {
  }
 };

 const firstPart = (
  <>
   <section>
    <h3>Заявитель</h3>
    <Input
     key={0}
     onChange={(e) => setState({ fio: e.target.value })}
     size={'large'}
     placeholder={'ФИО'}></Input>
   </section>
   <section key={'email'}>
    <h3>Электронная почта</h3>
    <Input
     key={1}
     onChange={(e) => setState({ email: e.target.value })}
     size={'large'}
     type={'email'}></Input>
   </section>
   <section>
    <h3>Телефон</h3>
    <Input
     key={-1}
     onChange={(e) => setState({ tel: e.target.value })}
     size={'large'}
     type={'tel'}
     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
     required></Input>
   </section>
   <section>
    <h3>Заявление подает</h3>
    <Radio.Group onChange={(e) => setState({ face: e.target.value })}>
     <Space direction="vertical">
      <Radio value={'person'}>Физическое лицо</Radio>
      <Radio value={'company'}>Юридическое лицо</Radio>
     </Space>
    </Radio.Group>
   </section>
   <section>
    <Button
     onClick={() => {
      setPart(part + 1);
     }}
     type={'primary'}
     size={'large'}
     disabled={validateButton()}>
     Продолжить
    </Button>
   </section>
  </>
 );

 const secondPart = (
  <>
   <section>
    <h3>Название мероприятия</h3>
    <Input
     onChange={(e) => {
      setState({ title: e.target.value });
     }}
     key={2}
     size={'large'}></Input>
   </section>
   <section>
    <h3>Направления</h3>
    <main
     style={{
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      maxWidth: '500px',
     }}
     className={styles.tags}>
     {tags.map((e, i) => {
      return (
       <Button
        onClick={() => {
         onTagClick(i);
        }}
        key={i.toString()}
        icon={e.icon}
        active={e.active.toString()}>
        {e.title}
       </Button>
      );
     })}
    </main>
   </section>
   <section>
    <h3>Тип проведения</h3>
    <Radio.Group style={{ width: '100%' }}>
     <Space
      direction="vertical"
      onChange={(e) => {
       setState({ online: e.target.value === 'online' });
      }}>
      <Radio value="online">Онлайн</Radio>
      <Radio value="offline">Оффлайн</Radio>
     </Space>
    </Radio.Group>
   </section>
   <section style={{ maxWidth: '320px' }}>
    <h3>Возрастная группа</h3>
    <div style={{ maxWidth: '300px', overflow: 'hidden' }}>
     <Slider defaultValue={[20, 50]} range min={5} max={60} />
    </div>
   </section>
   <section>
    <h3>Тэги</h3>
    <div style={{ maxWidth: '300px', width: 'fit-content', margin: '0px' }}>
     <Tags
      onChange={(e) => {
       setState({ tags: e });
      }}></Tags>
    </div>
   </section>
   <section>
    <h3>Адрес</h3>
    <Input
     size={'large'}
     onChange={(e) => {
      setState({ address: e.target.value });
     }}></Input>
   </section>
   <section style={{ maxWidth: '350px' }}>
    <h3>Район Москвы</h3>
    <Select
     placeholder={'Район Москвы'}
     onChange={(e) => {
      setState({ region: e });
     }}
     size={'large'}
     style={{ width: '100%' }}>
     {district.map((e) => {
      return (
       <React.Fragment key={e.name}>
        <Option value={e.name}>{e.title}</Option>
       </React.Fragment>
      );
     })}
    </Select>
   </section>
   <section
    style={{ display: 'flex', gap: '15px', width: '100%', maxWidth: '900px' }}>
    <div>
     <h4>Дата</h4>
     <DatePicker
      onChange={(e) => {
       setState({ date: e._d.getTime() });
      }}
      format={'DD/MM/YYYY'}></DatePicker>
    </div>
    <div>
     <h4>Время начала</h4>
     <TimePicker
      onChange={(e) => {
       setState({ dateStart: state.date + e._d.getTime() });
      }}
      format={'HH:mm'}></TimePicker>
    </div>
    <div>
     <h4>Время окончания</h4>
     <TimePicker
      onChange={(e) => {
       setState({ dateEnd: state.date + e._d.getTime() });
      }}
      format={'HH:mm'}></TimePicker>
    </div>
   </section>
   <section>
    <h3>Описание задач</h3>
    <TextArea
     onChange={(e) => {
      setState({ taskDescription: e.target.value });
     }}
     placeholer={'Опишите, какие задачи предстоит решать волонтеру'}></TextArea>
   </section>
   <section>
    <h3>Описание требований</h3>
    <TextArea
     onChange={(e) => {
      setState({ requirements: e.target.value });
     }}
     placeholer={'Опишите требования к вашей задаче'}></TextArea>
   </section>
   <section>
    <h3>Описание опций</h3>
    <TextArea
     onChange={(e) => {
      setState({ facilities: e.target.value });
     }}
     placeholer={'Описание предоставляемых опций'}></TextArea>
   </section>
   <div>
    <Button
     onClick={() => {
      let data = { ...state };
      let localtags = '[]';
      if (data.tags) {
       localtags = `[${data.tags.map((e) => `{name: "${e}"}`).join(', ')}]`;
      }
      let directions = `[${tags
       .filter((e) => e.active)
       .map((e) => `{name: "${e.title}"}`)
       .join(', ')}]`;
      const createRequestData = `
        mutation {
  createEvent(event: {title: "${data.title || ''}", region: "${
       data.region || ''
      }", address: "${data.address || ''}", dateStart: ${
       data.dateStart || ''
      }, dateEnd: ${data.dateEnd}, taskDescription: ${JSON.stringify(
       data.tags
      )}, requirements: ["${data.requirements || ''}"], facilities: ["${
       data.facilities
      }"], materials: ["url"], email: "${
       data.email || ''
      }", currentAmount: 0, maxAmount: 999, online: ${(
       data.online || ''
      ).toString()}, participants: [], directions: ${directions}, tags: ${localtags}, published: false}) {
    id
    title
    region
    address
    dateStart
    dateEnd
    taskDescription
    requirements
    facilities
    materials
    photoUrl
    email
    currentAmount
    maxAmount
    online
    participants {
      id
      login
      password
      role {
        id
        name
      }
    }
    owner {
      id
      login
      password
      role {
        id
        name
      }
    }
    directions {
      id
    }
    tags {
      id
    }
    published
  }
}
        `;

      createQuery(createRequestData).then(() => {
       message.info('Заявка успешно создана');
       setTags(() => {
        router.push('/');
       }, 1500);
      });
     }}
     type={'primary'}
     size={'large'}
     disabled={validateButton2()}>
     Создать заявку
    </Button>
   </div>
  </>
 );

 return (
  <div>
   <Header disableButtons={true} />
   <div className={styles.parent}>
    <div className={styles.content}>
     <header>
      <h1>Создание заявки</h1>
      <Divider />
      {part === 0 ? (
       <h4 style={{ margin: '0', color: 'gray' }}>Шаг {part + 1}</h4>
      ) : (
       <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
        <h4 style={{ margin: '0', color: '#008844' }}>Шаг 1</h4>
        <img src="/images/done.svg" alt="" />
       </div>
      )}
      <h2>{part === 0 ? 'Данные о заявителе' : <>Оформление заявки</>}</h2>
     </header>
     <main className={styles.main}>{part === 0 ? firstPart : secondPart}</main>
     {part === 0 ? (
      <footer style={{ marginTop: '40px' }}>
       <h4 style={{ margin: '0', color: 'gray' }}>Шаг {part + 2}</h4>
       <h2 style={{ margin: '0', color: 'gray' }}>
        {part === 0 ? 'Оформление заявки' : ''}
       </h2>
      </footer>
     ) : null}
    </div>
   </div>
  </div>
 );
}

CreateEventsAll.prototype.type = 'form';
