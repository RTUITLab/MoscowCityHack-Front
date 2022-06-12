import { SettingOutlined } from '@ant-design/icons';
import {
 Button,
 Card,
 Descriptions,
 Image,
 Progress,
 Row,
 Statistic,
 Table,
} from 'antd';
import React from 'react';
import Badge from '../../components/Badge/Badge';
import styles from '../../styles/profile.module.scss';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/MainContext.js';

const { Meta } = Card;

const Index = () => {
 const router = useRouter();
 const [state, setState] = useAuth();
 const user = state.user;

 const columns = [
  {
   title: 'Доброе дело',
   dataIndex: 'type',
   key: 'Доброе дело',
   render: (text) => <span>{text}</span>,
  },
  {
   title: 'Время работы',
   dataIndex: 'time',
   key: 'Время работы',
   render: (text) => text + ' ч',
  },
  {
   title: 'Дата начала',
   dataIndex: 'timeStart',
   key: 'Дата начала',
  },
  {
   title: 'Дата конца',
   dataIndex: 'timeEnd',
   key: 'Дата конца',
  },
  {
   title: 'Баллы',
   dataIndex: 'points',
   key: 'Баллы',
   render: (points) => <Badge count={points} />,
  },
 ];

 const data = [
  {
   key: '1',
   type: 'Помощь инвалидам',
   time: 4,
   timeStart: '13.01.2022',
   timeEnd: '20.02.2022',
   points: 100,
  },
  {
   key: '2',
   type: 'Помощь инвалидам',
   time: 4,
   timeStart: '13.01.2022',
   timeEnd: '20.02.2022',
   points: 200,
  },
  {
   key: '3',
   type: 'Помощь инвалидам',
   time: 4,
   timeStart: '13.01.2022',
   timeEnd: '20.02.2022',
   points: 350,
  },
 ];
 return (
  <div className={styles.profileWrapper}>
   <div>
    <Card
     className={styles.userCard}
     cover={
      <>
       <div className={styles.cardTitle}>
        <h3 className={styles.name}>{user.name}</h3>
       </div>
       <Image alt="Ваше фото" src={user.avatar} />
      </>
     }
     actions={[<SettingOutlined key="setting" />]}>
     <div className={styles.bottomStats}>
      <Descriptions
       column={1}
       labelStyle={{
        fontSize: '1.4em',
       }}
       contentStyle={{
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '1.4em',
       }}>
       <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gap: '15px', justifyContent: 'center' }}>
         <div>
          <Badge type={'level'} count={user.exp.toString()[0]}></Badge>
         </div>
         <div className={styles.status}>
          <Progress
           percent={user.exp % 100}
           className={styles.statusBar}
           showInfo={false}
          />
          <div style={{ fontSize: '14px', color: 'gray' }}>
           {100 - (user.exp % 100)} до след. уровня{' '}
           {
            //Что если уровень больше 1000?..
           }
          </div>
         </div>
        </div>
       </div>
      </Descriptions>
     </div>
    </Card>
   </div>

   <div className={styles.statsWrapper}>
    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8%' }}>
     <div>
      <span
       style={{
        color: 'rgba(0, 0, 0, 0.45)',
        fontWeight: '400',
        fontSize: '20px',
       }}>
       Баллы добра
      </span>
      <div
       style={{
        display: 'flex',
        alignItems: 'center',
       }}>
       <Badge />
       <span style={{ fontSize: '2em' }}>{user.points}</span>
      </div>
     </div>
     <Statistic
      title={<span style={{ fontSize: '1.4em' }}>Часов работы</span>}
      value={25}
      valueStyle={{ fontSize: '2em', textAlign: 'center' }}
     />
     <Statistic
      title={<span style={{ fontSize: '1.4em' }}>Мероприятия</span>}
      value={5}
      valueStyle={{ fontSize: '2em', textAlign: 'center' }}
     />
    </div>
    <Row
     justify="center"
     align="middle"
     style={{ marginTop: '5%' }}
     className={styles.tableWrapper}>
     <div
      style={{
       display: 'flex',
       width: '100%',
       justifyContent: 'space-between',
       alignItems: 'center',
       gap: '15px',
      }}>
      <div style={{ width: '100%' }}>
       <h3 className={styles.tableHeader}>Последние добрые дела</h3>
      </div>
      <div
       style={{
        width: '100%',
        display: 'flex',
        gap: '10px',
        justifyContent: 'flex-end',
       }}>
       <Button
        onClick={() => {
         window.open('/account/export');
        }}
        type="primary">
        Выгрузить в PDF
       </Button>
       <Button
        type="primary"
        onClick={() => {
         router.push('/account/achievements');
        }}>
        Достижения
       </Button>
      </div>
     </div>
     <div style={{ width: '100%' }}>
      <Table
       columns={columns}
       dataSource={data}
       pagination={{ position: ['bottomLeft'] }}
      />
     </div>
    </Row>
   </div>
  </div>
 );
};

export default Index;
