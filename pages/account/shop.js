import styles from '../../styles/shop.module.scss';
import { Card, Row, Col } from 'antd';
import {
 HeartOutlined,
 DislikeOutlined,
 ShoppingCartOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
const { Meta } = Card;
import React from 'react';

function ShopCard(props) {
 return (
  <div className="cardWrapper" style={{ width: 500 }}>
   <Card
    cover={
     <Image
      alt="example"
      src={props.imgSrc}
      layout="responsive"
      width="100"
      height="50"
      objectFit="cover"
     />
    }
    actions={[
     <HeartOutlined key="like" className={styles.action} />,
     <DislikeOutlined key="dislike" className={styles.action} />,
     <ShoppingCartOutlined key="add" className={styles.action} />,
    ]}>
    <Meta title={props.title} description={props.description} />
   </Card>
  </div>
 );
}

export default function Shop() {
 let imgSrc =
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
 let rows = [
  [
   {
    imgSrc: imgSrc,
    title: 'Футболка',
    description: 'Хлопок 100%',
   },
   {
    imgSrc: imgSrc,
    title: 'Кепка',
    description: 'красная кепка лакшери',
   },
   {
    imgSrc: imgSrc,
    title: 'Рюкзак',
    description: 'Самый прочный, надежный и большой',
   },
   {
    imgSrc: imgSrc,
    title: 'Самолет',
    description: 'Самый прочный, надежный и большой',
   },
  ],
  [
   {
    imgSrc: imgSrc,
    title: 'Футболка',
    description: 'Хлопок 100%',
   },
   {
    imgSrc: imgSrc,
    title: 'Кепка',
    description: 'красная кепка лакшери',
   },
   {
    imgSrc: imgSrc,
    title: 'Рюкзак',
    description: 'Самый прочный, надежный и большой',
   },
  ],
 ];
 return (
  <div className={styles.shopWrapper}>
   {rows.map((row, i) => (
    <Row key={i} style={{ marginTop: 50 }}>
     {row.map((el, i) => (
      <Col flex={1} key={i}>
       <ShopCard
        imgSrc={el.imgSrc}
        title={el.title}
        description={el.description}
       />
      </Col>
     ))}
    </Row>
   ))}
  </div>
 );
}
