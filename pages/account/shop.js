import styles from '../../styles/shop.module.scss';
import { Card, Image } from 'antd';
import {
 HeartFilled,
 HeartOutlined,
 ShoppingFilled,
 ShoppingOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useAuth } from '../../contexts/MainContext';
import Badge from '../../components/Badge/Badge';

const { Meta } = Card;

function ShopCard(props) {
 let data = props.data;
 let [id, imgSrc, title, price, description, liked, inCart] = [
  data.id,
  data.imgSrc,
  data.title,
  data.price,
  data.description,
  data.liked,
  data.inCart,
 ];
 let heart = liked ? (
  <HeartFilled
   key="like"
   style={{ fontSize: '1.4em' }}
   onClick={() => props.handleLike(id)}
  />
 ) : (
  <HeartOutlined
   key="like"
   style={{ fontSize: '1.4em' }}
   onClick={() => props.handleLike(id)}
  />
 );
 let shoppingCart = inCart ? (
  <ShoppingFilled
   key="add"
   style={{ fontSize: '1.4em' }}
   onClick={() => props.handleAddCart(id)}
  />
 ) : (
  <ShoppingOutlined
   key="add"
   style={{ fontSize: '1.4em' }}
   onClick={() => props.handleAddCart(id)}
  />
 );
 return (
  <div className={styles.cardWrapper}>
   <Card
    bodyStyle={{
     height: 160,
    }}
    cover={
     <Image
      alt="example"
      src={imgSrc}
      width="50"
      height="250px"
      objectFit="cover"
      style={{ objectFit: 'cover' }}
     />
    }
    actions={[heart, shoppingCart]}>
    <Meta title={title} description={description} />
    <div className={styles.price}>
     <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      Цена: {price} <Badge />
     </div>
    </div>
   </Card>
  </div>
 );
}

export default function Shop() {
 /*const [favourite, setFavourite] = useState([]);
			const [shoppingCart, setShoppingCart] = useState([]);*/
 const [state, setState] = useAuth();

 function handleLike(id) {
  let curItems = state.shop.items;
  let hasLike = curItems.some((el) => el.id === id && el.liked);
  curItems[curItems.findIndex((el) => el.id === id)].liked = hasLike
   ? false
   : true;
  setState({ items: curItems });
 }

 function handleAddCart(id) {
  let curItems = state.shop.items;
  let alreadyInCart = curItems.some((el) => el.id === id && el.inCart);
  let indexElem = curItems.findIndex((el) => el.id === id);
  if (alreadyInCart) {
   //удалить
   curItems[indexElem].inCart = false;
   setState({
    shop: {
     items: curItems,
     totalCardPrice: state.shop.totalCardPrice - curItems[indexElem].price,
    },
   });
  } else {
   curItems[indexElem].inCart = true;
   setState({
    shop: {
     items: curItems,
     totalCardPrice: state.shop.totalCardPrice + curItems[indexElem].price,
    },
   });
  }
 }

 return (
  <div className={styles.shopWrapper}>
   {state.shop.items.map((el, i) => (
    <ShopCard
     key={i}
     data={el}
     handleAddCart={handleAddCart}
     handleLike={handleLike}
    />
   ))}
  </div>
 );
}
