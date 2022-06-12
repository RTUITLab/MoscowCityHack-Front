import styles from '../../styles/export-page.module.scss';
import { Button, Divider, Table, Tag } from 'antd';
import React from 'react';
import Link from 'next/link';

export default function ExportEventsPage() {
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
   title: '№',
   dataIndex: 'name',
   key: 'name',
  },
  {
   title: 'Название',
   dataIndex: 'name',
   key: 'name',
   render: (text, id) => <Link href={`./events/${id}`}>{text}</Link>,
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
   title: 'Часы',
   dataIndex: 'district',
   key: 'address',
  },
 ];

 const download = () => {
  // var html2pdf = require('html-to-pdf-js');
  // var element = document.getElementById('element-to-print');
  // const opt = {
  //  filename: 'export.pdf',
  //  margin: 6,
  // };
  //
  // document.getElementById('button-container').style.display = 'none';
  // html2pdf(element, opt)
  //  .outputPdf()
  //  .then((e) => {
  //   setTimeout(() => {
  //    window.close();
  //   }, 250);
  //  });
 };

 return (
  <div>
   <div className={styles.parentContainer} id={'element-to-print'}>
    <div className={styles.contentContainer}>
     <div onClick={download} id={'button-container'}>
      <Button type={'primary'}>Скачать</Button>
     </div>
     <div className={styles.header}>
      <h1>История волонтерской деятельности</h1>
      <h2>Основная информация</h2>
      <div className={styles.table}>
       <h3>ФИО:</h3>
       <p>Фамилия Имя Отчество</p>
       <h3>Дата рождения:</h3>
       <p>14.11.2002</p>
       <h3>Всего событий:</h3>
       <p>245</p>
       <h3>Всего часов:</h3>
       <p>125</p>
      </div>
     </div>
     <Divider />
     <h2>События</h2>
     <Table
      pagination={false}
      style={{
       width: '100%',
       borderRadius: '7px',
      }}
      columns={columns}
      dataSource={test}
     />
     <Divider />
     <div className={styles.footer}>
      <span>{new Date().toLocaleDateString('ru')}</span>
     </div>
    </div>
   </div>
  </div>
 );
}

ExportEventsPage.prototype.type = 'export';

export function getServerSideProps() {
 return {
  props: {},
 };
}
