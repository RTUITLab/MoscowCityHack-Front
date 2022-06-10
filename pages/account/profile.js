import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import {
 Descriptions,
 Card,
 Progress,
 Statistic,
 Row,
 Col,
 Button,
 Table,
} from 'antd';
import React from 'react';
const { Meta } = Card;
import Badge from '../../components/Badge/Badge';
import styles from '../../styles/profile.module.scss';

const CardTitle = () => {
 return (
  <div className={styles.cardTitle}>
   <h3 className={styles.name}>Костик Иванов</h3>
   <div className={styles.status}>
    <div className={styles.statusBarHeader}>200 до след. уровня</div>
    <Progress percent={70} className={styles.statusBar} showInfo={false} />
   </div>
   <Badge count={2} />
  </div>
 );
};

const myLoader = ({ src, width, quality }) => {
 return `https://images.unsplash.com/${src}`;
};

const Profile = () => {
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
   <Row justify="space-around">
    <Col span={12}>
     <Card
      className={styles.userCard}
      cover={
       <>
        <CardTitle />
        <Image
         loader={myLoader}
         layout="responsive"
         width="300"
         height="300"
         className={styles.avatarBig}
         alt="Ваше фото"
         src="photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
       </>
      }
      actions={[
       <SettingOutlined key="setting" />,
       <EditOutlined key="edit" />,
       <EllipsisOutlined key="ellipsis" />,
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
        <Descriptions.Item label="Количество мероприятий">
         <span>{4}</span>
        </Descriptions.Item>
        <Descriptions.Item label="Часов работы">
         <span>{12}</span>
        </Descriptions.Item>
        <Descriptions.Item label="Количество мероприятий">
         <span>{4}</span>
        </Descriptions.Item>
       </Descriptions>
      </div>
     </Card>
    </Col>
    <Col span={12} className={styles.statsWrapper}>
     <Row justify="space-around" align="top" wrap={false}>
      <Col span={8}>
       <Statistic
        title="Баллы добра"
        value={11283}
        valueStyle={{ padding: 0, textAlign: 'center' }}
       />
      </Col>
      <Col span={8}>
       <Statistic
        title="Часов работы"
        value={25}
        valueStyle={{ padding: 0, textAlign: 'center' }}
       />
      </Col>
      <Col span={8}>
       <Statistic
        title="Мероприятия"
        value={5}
        valueStyle={{ padding: 0, textAlign: 'center' }}
       />
      </Col>
     </Row>
     <Row>
      <Row>
       <Col span={14}>Последние добрые дела</Col>
       <Col span={10}>
        <Button type="primary">Выгрузить в PDF</Button>
        <Button type="primary">Достижения</Button>
       </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
     </Row>
    </Col>
   </Row>
  </div>
 );
};

export default Profile;
