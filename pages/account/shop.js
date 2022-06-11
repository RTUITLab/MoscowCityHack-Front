import styles from '../../styles/shop.module.scss';
import { Card, Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
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
     />
    }
    actions={[
     <HeartOutlined key="add" />,
     <HeartOutlined key="add" />,
     <HeartOutlined key="add" />,
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
    title: 'Рюкзак',
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
      <Col span={6} key={i}>
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
