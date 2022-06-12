import { Divider, Table } from 'antd';
import Badge from '../../components/Badge/Badge';

export default function Bonuses() {
 const dataSource = [
  {
   title: 'Уборка территории школы',
   org: 'РТУ МИРЭА',
   date: 1499999999999,
   points: 100,
  },
  {
   title: 'Помощь в проведении чемпионата',
   org: 'ФК "Союз"',
   date: 999999999999,
   points: 500,
  },
  {
   title: 'Настройка пианино',
   org: 'Николай Иванович',
   date: 999899499423,
   points: 100,
  },
  {
   title: 'Помощь в сборе крови',
   org: 'Целимед',
   date: 922899499423,
   points: 800,
  },
  {
   title: 'Выгул собаки',
   org: 'Мария Иванова',
   date: 993299799423,
   points: 200,
  },
 ];

 const columns = [
  {
   title: 'Событие',
   dataIndex: 'title',
   key: 'title',
  },
  {
   title: 'Организатор',
   dataIndex: 'org',
   key: 'org',
  },
  {
   title: 'Дата',
   dataIndex: 'date',
   key: 'date',
   render: (date) => {
    return new Date(date).toLocaleString('ru');
   },
  },
  {
   title: 'Баллы',
   dataIndex: 'points',
   key: 'points',
   render: (points) => {
    return (
     <div
      style={{
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'nowrap',
       alignItems: 'center',
       gap: '10px',
      }}>
      <span style={{ color: 'green' }}>+ {points}</span>
      <Badge />
     </div>
    );
   },
  },
 ];
 return (
  <div style={{ marginTop: '-3%' }}>
   <Table dataSource={dataSource} columns={columns} bordered />
   {/*<h1>¯\_(ツ)_/¯</h1>
    <h3 style={{ color: 'gray' }}>Страница пока не реализована</h3>
    <Divider />
    <span style={{ textAlign: 'center' }}>
     В будущем здесь планируется добавить вкладку с историей начисления и
     списания бонусов.
    </span>*/}
  </div>
 );
}
