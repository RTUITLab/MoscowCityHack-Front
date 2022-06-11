import styles from '../../styles/shop.module.scss';
import { Card, Image } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';

const { Meta } = Card;

function ShopCard(props) {
 return (
  <div className={styles.cardWrapper}>
   <Card
    cover={
     <Image
      alt="example"
      src={props.imgSrc}
      width="50"
      height="50"
      objectFit="cover"
     />
    }
    actions={[
     <HeartOutlined key="like" className={styles.action} />,
     <ShoppingCartOutlined key="add" className={styles.action} />,
    ]}>
    <Meta title={props.title} description={props.cost.toString()} />
   </Card>
  </div>
 );
}

export default function Shop() {
 let imgSrc =
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
 let rows = [
  {
   imgSrc: imgSrc,
   title: 'Футболка',
   cost: 9599,
  },
  {
   imgSrc: imgSrc,
   title: 'Кепка',
   cost: 9599,
  },
  {
   imgSrc: imgSrc,
   title: 'Рюкзак',
   cost: 9599,
  },
  {
   imgSrc: imgSrc,
   title: 'Самолет',
   cost: 9599,
  },
  {
   imgSrc: imgSrc,
   title: 'Самолет',
   cost: 9599,
  },
 ];
 return (
  <div className={styles.shopWrapper}>
   {rows.map((el, i) => (
    <ShopCard key={i} imgSrc={el.imgSrc} title={el.title} cost={el.cost} />
   ))}
  </div>
 );
}
