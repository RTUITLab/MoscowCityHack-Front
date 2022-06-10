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

const Profile = () => (
 <div className="profile-wrapper">
  <Card
   title={<CardTitle />}
   className="userCard"
   cover={
    <Image
     layout="responsive"
     sizes="60vw"
     className="avatarBig"
     alt="example"
     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
