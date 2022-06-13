import { Button, Table, Tag } from 'antd';
import React from 'react';
import Link from 'next/link';

export default function Requests() {
 const test = [
  {
   name: 'Имя аааа',
   date: new Date().getTime(),
   tags: ['fdfdf', 'fdfdsf', 'fdfdf'],
   district: 'Юго-Запад',
   org: 'Юго-Запад',
  },
  {
   name: 'Имя аааа',
   date: new Date().getTime(),
   tags: ['fdfdf', 'fdfdsf', 'fdfdf'],
   district: 'Юго-Запад',
   org: 'Юго-Запад',
  },
 ];

 const columns = [
  {
   title: 'Название',
   dataIndex: 'name',
   key: 'name',
   render: (text, id) => (
    <Link target={'_blank'} href={`./events/${id}`}>
     {text}
    </Link>
   ),
  },
  {
   title: 'Организатор',
   dataIndex: 'org',
   key: 'name',
   render: (text) => <div>{text}</div>,
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
   title: 'Тэги',
   key: 'tags',
   dataIndex: 'tags',
   render: (_, { tags }) => (
    <>
     {tags.map((tag, i) => {
      let color = tag.length > 5 ? 'geekblue' : 'green';

      return (
       <React.Fragment key={i}>
        <Tag color={color}>{tag.toUpperCase()}</Tag>
       </React.Fragment>
      );
     })}
    </>
   ),
  },
  {
   title: 'Направление',
   dataIndex: 'district',
   key: 'address',
  },
  {
   title: 'Район',
   dataIndex: 'district',
   key: 'address',
  },
  {
   title: 'Действие',
   render: (text, id) => {
    return (
     <div>
      <Button type={'primary'} style={{ marginRight: '10px' }}>
       Опубликовать
      </Button>
      <Button danger>Отклонить</Button>
     </div>
    );
   },
  },
 ];

 return (
  <div>
   <Table
    style={{
     width: '100%',
     backgroundColor: 'white',
     padding: '25px',
     borderRadius: '7px',
    }}
    columns={columns}
    dataSource={test}
   />
  </div>
 );
}
