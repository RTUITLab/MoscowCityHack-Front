import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Profile = () => (
 <div className="profile-wrapper">
  <Card
   title={<div className="cardTitle">Костик </div>}
   className="userCard"
   cover={
    <img
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
