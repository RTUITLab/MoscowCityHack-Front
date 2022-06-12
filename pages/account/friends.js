import { Divider } from 'antd';

export default function Friends() {
 return (
  <div
   style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
   }}>
   <div
    style={{
     width: '100%',
     maxWidth: '500px',
     display: 'flex',
     justifyContent: 'center',
     flexDirection: 'column',
     alignItems: 'center',
    }}>
    <h1>¯\_(ツ)_/¯</h1>
    <h3 style={{ color: 'gray' }}>Страница пока не реализована</h3>
    <Divider />
    <span style={{ textAlign: 'center' }}>
     В будущем здесь планировалось добавить вкладку со списком друзей.
    </span>
   </div>
  </div>
 );
}
