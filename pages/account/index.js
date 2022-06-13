import { SettingOutlined } from '@ant-design/icons';
import {
 Button,
 Card,
 Descriptions,
 Divider,
 Image,
 Progress,
 Row,
 Statistic,
 Table,
} from 'antd';
import React, { useEffect } from 'react';
import Badge from '../../components/Badge/Badge';
import styles from '../../styles/profile.module.scss';
import { useRouter } from 'next/router';
import { useAuth, useUser } from '../../contexts/MainContext.js';
import { createQuery } from '../../services';

const { Meta } = Card;

const Index = () => {
 const router = useRouter();
 const [state, setState] = useAuth();
 const [user, setU] = useUser();

 useEffect(() => {
  initUserData(setU, setState);
 }, []);

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
 ];

 const data = (user.events || []).map((e, i) => {
  return {
   key: i.toString(),
   type: e.title,
   time: Math.ceil((e.dateEnd - e.dateStart) / 60),
   timeStart: new Date(e.dateStart).toLocaleString('ru'),
   timeEnd: new Date(e.dateEnd).toLocaleString('ru'),
  };
 });

 return (
  <div className={styles.profileWrapper}>
   <div>
    <Card
     className={styles.userCard}
     cover={
      <>
       <div className={styles.cardTitle}>
        <h3 className={styles.name}>{user.name + ' ' + user?.surname}</h3>
       </div>
       <Image alt="Ваше фото" src={user.avatar} />
      </>
     }
     actions={[
      <SettingOutlined
       onClick={() => {
        router.push('/account/settings');
       }}
       key="setting"
      />,
     ]}>
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
          <Badge
           type={'level'}
           count={Math.floor(user?.exp / 100)?.toString()}></Badge>
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
    <Divider />
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

export async function initUserData(setU, setState) {
 const ROLE = localStorage.getItem('ROLE');
 let DATA = await createQuery(`
    {
    getAdvancementByToken {
      level
      points
      exp
    }
  }
    `);
 DATA = DATA?.data?.getAdvancementByToken;

 let EVENTS = await createQuery(`
  {
  getEventsByToken {
   ${EVENTS_PARAMS}
  }
}
  `);
 EVENTS = EVENTS?.data?.getEventsByToken;

 let ALL_EVENTS = await createQuery(`
  {
  getEventsByToken {
    ${EVENTS_PARAMS}
  }
}
  `);
 ALL_EVENTS = ALL_EVENTS?.data?.getEventsByToken;

 setState({ events: ALL_EVENTS });

 if (ROLE === 'ROLE_VOLUNTEER') {
  createQuery(`
    query{
     getVolunteerByToken{id, name,surname,birthDate,user{id}}
   }
  `).then((r) => {
   const USER = r.data.getVolunteerByToken;
   setU({
    id: USER.id,
    name: USER.name,
    surname: USER.surname,
    birthdate: USER.birthDate,
    userId: USER.user.id,
    exp: DATA?.exp || 0,
    points: DATA?.points || 0,
    level: DATA?.level || 0,
    events: EVENTS,
   });
  });
 } else {
  createQuery(`
    query{
     getCompanyByToken{id, name,user{id}}
   }
  `).then((r) => {
   const USER = r.data.getCompanyByToken;
   setU({
    id: USER.id,
    name: USER.name,
    surname: '',
    birthdate: undefined,
    userId: USER.user.id,
    exp: DATA?.exp || 0,
    points: DATA?.points || 0,
    level: DATA?.level || 0,
    events: EVENTS,
   });
  });
 }
}

const EVENTS_PARAMS = `
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
      role {
        name
      }
    }
    owner {
      id
      role {
        name
      }
    }
    directions {
      name
    }
    tags {
      name
    }
    published
`;

export default Index;
