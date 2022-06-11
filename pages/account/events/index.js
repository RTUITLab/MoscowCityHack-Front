import { Button, Input, Space, Table, Tag } from 'antd';
import { useRouter } from 'next/router';
import styles from '../../../styles/events.module.scss';
import React from 'react';

export default function Events() {
 const router = useRouter();

 const test = [
  {
   name: ['Имя аааа', 2222],
   date: new Date().getTime(),
   id: 3,
   tags: ['fdfdf', 'fdfdsf', 'fdfdf'],
   rayon: 'Юго-Запад',
  },
  {
   name: ['Имя аааа', 23423],
   date: new Date().getTime(),
   tags: ['fdfdf', 'fdfdsf', 'fdfdf'],
   rayon: 'Юго-Запад',
  },
 ];

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

      if (tag === 'loser') {
       color = 'volcano';
      }

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
  <div className={styles.parentContainer}>
   <div style={{ flex: '1 1 100%' }} className={styles.content}>
    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
     <div>
      <Input placeholder={'Поиск'}></Input>
     </div>
     <div>
      <Button type={'primary'}>Поиск</Button>
     </div>
     <div style={{ display: 'flex', gap: '10px' }}>
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
     </div>
    </div>
    <Table style={{ width: '100%' }} columns={columns} dataSource={test} />
   </div>
   <div style={{ flex: '1 1 25%' }}>RIGHT CHECKBOX</div>
  </div>
 );
}
