import {
 Button,
 Checkbox,
 DatePicker,
 Divider,
 Input,
 Select,
 Space,
 Table,
 Tag,
 TimePicker,
} from 'antd';
import { useRouter } from 'next/router';
import styles from '../../../styles/events.module.scss';
import React, { useEffect, useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { district, tags } from '../../../utils/data';
import Link from 'next/link';
import Map from '../../../components/map';
import { createQuery } from '../../../services';
import { useUser } from '../../../contexts/MainContext';

const { Option } = Select;

export default function Events() {
 const router = useRouter();
 const [viewMap, setMapVisible] = useState(false);
 const [state, editState] = useState({});
 const [user, setUser] = useUser();
 const [events, setEvents] = useState([]);
 const setState = (e) => {
  editState((prevState) => ({ ...prevState, ...e }));
 };

 useEffect(() => {
  if (router.query.search) {
   setState({ name: router.query.search });
   document.getElementById('name-input').focus();
  }
  getEvents();
  console.log(events);
 }, []);

 async function getEvents() {
  let events = await createQuery(`
  query{getEvents{
    id,
    title,
    region,
    dateStart,
    dateEnd,
    owner {
      id
      role {
        name
      }
    },
    directions {
      id
      name
    },
    tags {
      id
      name
    },
    published
  }}
    `);
  events = events?.data?.getEvents;
  events?.filter((event) => event.published === true);
  console.log(events);
  setEvents(events);
 }

 const columns = [
  {
   title: 'Название',
   dataIndex: 'title',
   key: 'title',
   render: (text, { id }) => <Link href={`./events/${id}`}>{text}</Link>,
  },
  {
   title: 'Организатор',
   dataIndex: ['owner', 'id'],
   key: 'owner',
   render: (text) => <div>{text}</div>,
  },
  {
   title: 'Дата',
   dataIndex: 'dateStart',
   key: 'dateStart',
   render: (e) => {
    return new Date(e).toLocaleDateString('ru');
   },
  },
  {
   title: 'Тэги',
   key: 'tags',
   dataIndex: 'tags',
   render: (tags) => {
    return tags.map((tag, i) => {
     let tagName = tag.name.toUpperCase();
     let color = tagName.length > 5 ? 'geekblue' : 'green';
     return (
      <React.Fragment key={i}>
       <Tag color={color}>{tagName}</Tag>
      </React.Fragment>
     );
    });
   },
  },
  {
   title: 'Направление',
   dataIndex: 'directions',
   key: 'address',
   render: (directions) => (
    <>
     {directions.map((tag, i) => {
      let tagName = tag.name.toUpperCase();
      let color = tagName.length > 5 ? 'geekblue' : 'green';
      return (
       <React.Fragment key={i}>
        <Tag color={color}>{tagName}</Tag>
       </React.Fragment>
      );
     })}
    </>
   ),
  },
  {
   title: 'Район',
   dataIndex: 'region',
   key: 'region',
   render: (region) => (
    <div>{district.filter((dis) => dis.name === region)[0].title}</div>
   ),
  },
 ];

 return (
  <div className={styles.parentContainer}>
   <div style={{ flex: '1 1 100%' }} className={styles.content}>
    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
     <div>
      <Input
       id={'name-input'}
       value={state.name}
       onChange={(e) => {
        setState({ name: e.target.value });
       }}
       placeholder={'Поиск'}></Input>
     </div>
     <div>
      <Button type={'primary'}>Поиск</Button>
     </div>
     <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {user.role === 'ROLE_MODERATOR' ? (
       <>
        <Button
         onClick={() => {
          router.push('/account/events/create');
         }}>
         Создать мероприятие
        </Button>
        <Button
         onClick={() => {
          router.push('/account/events/requests');
         }}>
         Просмотр заявок
        </Button>
       </>
      ) : null}
      <Divider style={{ height: '100%' }} type="vertical" />
      <Button
       type="link"
       style={{ margin: '0', padding: '0' }}
       onClick={() => {
        setMapVisible(!viewMap);
       }}>
       {viewMap ? 'Показать списком' : 'Отобразить на карте'}
      </Button>
     </div>
    </div>
    <div style={{ display: 'flex', gap: '15px' }}>
     {viewMap ? (
      <Map />
     ) : (
      <Table
       style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '7px',
       }}
       columns={columns}
       dataSource={events}
      />
     )}
     <div
      style={{
       flex: '1 1 35%',
       position: 'picker',
       top: '25px',
       backgroundColor: 'white',
       padding: '25px',
       display: 'flex',
       flexDirection: 'column',
       gap: '20px',
       height: 'fit-content',
       borderRadius: '7px',
      }}>
      <section>
       <h3>Дата проведения</h3>
       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DatePicker format={'DD/MM/YYYY'} />
        <ArrowRightOutlined />
        <DatePicker format={'DD/MM/YYYY'} />
       </div>
      </section>
      <section>
       <h3>Время проведения</h3>
       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TimePicker format={'HH:mm'} />
        <ArrowRightOutlined />
        <TimePicker format={'HH:mm'} />
       </div>
      </section>
      <section>
       <h3>Тип мероприятия</h3>
       <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Checkbox.Group style={{ width: '100%' }}>
         <Space direction="vertical">
          <Checkbox value="online">Онлайн</Checkbox>
          <Checkbox value="offline">Оффлайн</Checkbox>
         </Space>
        </Checkbox.Group>
       </div>
      </section>
      <section>
       <h3>Местоположение</h3>
       <Select
        mode="multiple"
        placeholder={'Район Москвы'}
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
      <section>
       <h3>Направления</h3>
       <Select
        mode="multiple"
        placeholder={''}
        size={'large'}
        style={{ width: '100%' }}>
        {tags.map((e) => {
         return (
          <React.Fragment key={e.name}>
           <Option value={e.name}>{e.title}</Option>
          </React.Fragment>
         );
        })}
       </Select>
      </section>
     </div>
    </div>
   </div>
  </div>
 );
}
