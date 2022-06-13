import styles from '../../../styles/eventPage.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Image, Progress, Tag } from 'antd';
import {
 FieldTimeOutlined,
 HomeOutlined,
 InfoCircleOutlined,
} from '@ant-design/icons';
import { createQuery } from '../../../services';
import { useAuth } from '../../../contexts/MainContext';
import { tags } from '../../../utils/data';

export default function EventPage() {
 const [state, setState] = useAuth();
 const router = useRouter();
 const [project, setProject] = useState('empty');
 const { eventId } = router.query;

 function initProject(proj) {
  setProject(() => proj);
 }

 async function getData(id) {
  let event = await createQuery(
   `query{
    searchEvents(filter: [
      {key: "id",
        operator: "EQUAL",
        fieldType: "INTEGER",
        value: "${id}"}]) {
      id
      title
      dateStart
    address
    region
    taskDescription
    requirements
    facilities
    materials
    currentAmount
    maxAmount
    online
    owner {
      id
    }
    tags {
      id 
      name
    }
      directions {
        name
        id
      }
      }
  }`
  );
  event = event?.data?.searchEvents[0] || 'empty';
  console.log('e ', event);
  initProject(event);
 }

 useEffect(() => {
  getData(eventId);
 }, []);

 useEffect(() => {
  console.log('eve   ', project);
 }, [project]);

 return (
  <>
   {project === 'empty' ? (
    <div style={{ position: 'absolute', top: '30%', left: '50%' }}>
     <h1>Событие не найдено</h1>
    </div>
   ) : (
    <div className={styles.eventWrapper}>
     <header className={styles.projectHead}>
      <h2>{project.name}</h2>
      <div className={styles.projectStatus}>
       {project.online ? (
        <>
         <img src={'/images/home.svg'} width={25} height={25} />
         Онлайн
        </>
       ) : (
        <>
         <img src={'/images/parent.svg'} width={25} height={25} />
         Оффлайн
        </>
       )}
      </div>
      {
       //Button size="large">Участники</Button>
      }
     </header>
     <section className={styles.projectTop}>
      <Image
       src={project.imgSrc || '/images/default.jpg'}
       width={400}
       height={480}
       style={{ objectFit: 'cover' }}
      />
      <div className={styles.imgAside}>
       <h4>Направления</h4>
       <div className={styles.directions}>
        {project.directions.map((direction, i) => (
         <Button
          key={i}
          size="large"
          className={styles.direction}
          icon={
           <img src="/images/plant.svg" style={{ backgroundColor: 'white' }} />
          }>
          {direction.name}
         </Button>
        ))}
       </div>
       <div className={styles.texts}>
        <div className={styles.text}>
         <InfoCircleOutlined />
         {project?.owner?.id || 'Создатель мероприятия не указан'}
        </div>
        <div className={styles.text}>
         <HomeOutlined />
         {project.address}
        </div>
        <div className={styles.text}>
         <FieldTimeOutlined />
         {new Date(project.dateStart).toLocaleString('ru')}
        </div>
       </div>
       <div className={styles.places}>
        <span>Осталось мест</span>
        <span>{project.currentAmount + '/' + project.maxAmount}</span>
       </div>
       <Progress
        status="active"
        percent={(project.currentAmount / project.maxAmount) * 100}
       />
       <div className={styles.tags}>
        <h4>Теги: </h4>
        {project.tags.map((gotTag, i) => (
         <Tag key={i} className={styles.tag}>
          {tags.filter((t) => t.name === gotTag.name)[0]?.title || 'Общество'}
         </Tag>
        ))}
       </div>
      </div>
     </section>

     <section className={styles.projectBottom}>
      <h3>Описание задач</h3>
      <ul>
       <div>
        {project.taskDescription.map((el, i) => (
         <li key={i}>{el}</li>
        ))}
       </div>
      </ul>
      <h3>Описание требований</h3>
      <ul>
       <div>
        {project.requirements.map((el, i) => (
         <li key={i}>{el}</li>
        ))}
       </div>
      </ul>
      <h3>Описание предоставляемых опций</h3>
      <ul>
       <div>
        {project.facilities.map((el, i) => (
         <li key={i}>{el}</li>
        ))}
       </div>
      </ul>
      <h3>Материалы</h3>
      <div className={styles.materials}>
       <Image.PreviewGroup>
        {project.materials.map((img, i) => (
         <Image src={'/images/default.jpg'} key={i} width={350} />
        ))}
       </Image.PreviewGroup>
      </div>
     </section>
    </div>
   )}
  </>
 );
}
