import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import { Avatar, Card, Progress } from 'antd';
import React from 'react';
const { Meta } = Card;
import Badge from '../../components/Badge/Badge';

const CardTitle = () => {
 return (
  <div className="cardTitle">
   <h4>Костик</h4>
   <div className="status">
    <span>200 до следующего уровня</span>
    <Progress percent={50} status="active" />
   </div>
   <Badge count={2} />
  </div>
 );
};

const myLoader = ({ src, width, quality }) => {
 return `https://images.unsplash.com/${src}`;
};

const Profile = () => (
 <div className="profile-wrapper">
  <Card
   title={<CardTitle />}
   className="userCard"
   cover={
    <Image
     loader={myLoader}
     layout="responsive"
     width="50px"
     height="50px"
     className="avatarBig"
     alt="Ваше фото"
     src="photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
    />
   }
   actions={[
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
   ]}>
   xxx
  </Card>
  <div className="userInfo">info</div>
 </div>
);

export default Profile;
