import styles from '../../../styles/learning.module.scss';
import { Button } from 'antd';
import { useUser } from '../../../contexts/MainContext';

export default function LearningPage() {
 const [user, setUser] = useUser();

 return (
  <div className={styles.parentContainer}>
   <div className={styles.contentContainer}>
    <CustomCard
     data={{
      title: 'Курс волонтёра-медика',
      desc: 'Вы научитесь оказывать первую помощь на мероприятиях',
      count: 7,
      time: 2,
     }}
     style={{ backgroundColor: '#f14f45' }}
    />
    <CustomCard
     data={{
      title: 'Курс волонтера культуры',
      desc: 'Вам расскажут как проводить экскурсии',
      count: 7,
      time: 2,
      link: undefined,
     }}
     style={{ backgroundColor: '#3fa901' }}
    />
    <CustomCard
     data={{
      title: 'Курс волонтёра-организатора',
      desc:
       'Вы научитесь помогать в организации фестивалей, концертов и выставок',
      count: 7,
      time: 2,
     }}
     style={{ backgroundColor: '#00bbb5' }}
    />
   </div>
  </div>
 );
}

function CustomCard({ style, data }) {
 return (
  <div className={styles.customCardParent} style={style}>
   <h2>{data.title}</h2>
   <h4>{data.desc}</h4>
   <hr />
   <div className={styles.info}>
    <div>
     <h3>Всего заданий:</h3>
     <span>{data.count}</span>
    </div>
    <hr />
    <div>
     <h3>Часов на прохождение:</h3>
     <span>{data.time}</span>
    </div>
   </div>

   {data.link ? (
    <Button style={{ marginTop: '15px' }} size={'large'}>
     Пройти
    </Button>
   ) : (
    <h2 style={{ marginTop: '15px' }}>Скоро...</h2>
   )}
  </div>
 );
}
