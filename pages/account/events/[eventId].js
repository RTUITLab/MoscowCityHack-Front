import styles from '../../../styles/eventPage.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Image, Progress, Tag } from 'antd';
import {
 HomeOutlined,
 FieldTimeOutlined,
 InfoCircleOutlined,
} from '@ant-design/icons';
import { useAuth } from '../../../contexts/MainContext';

export default function EventPage() {
 const [state, setState] = useAuth();
 const router = useRouter();
 let project;
 const { eventId } = router.query;

 function getData(id) {
  project = state.user.eventsParticipate[id];
 }

 useEffect(() => {
  getData(0);
 }, [eventId]);

 return (
  <>
   {project === 'empty' ? (
    <div style={{ position: 'absolute', top: '30%', left: '50%' }}>
     <h1>Событие не найдено</h1>
    </div>
   ) : (
    <div className={styles.eventWrapper}>
     <header className={styles.projectHead}>
      <h2>{project.title}</h2>
      <div className={styles.projectStatus}>
       {project.online === 'online' ? (
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
       src={project.imgSrc}
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
          {direction}
         </Button>
        ))}
       </div>
       <div className={styles.texts}>
        <div className={styles.text}>
         <InfoCircleOutlined />
         {project.companyName}
        </div>
        <div className={styles.text}>
         <HomeOutlined />
         {project.address}
        </div>
        <div className={styles.text}>
         <FieldTimeOutlined />
         {new Date(project.date).toString()}
        </div>
       </div>
       <div className={styles.places}>
        <span>Осталось мест</span>
        <span>{project.capacity[0] + '/' + project.capacity[1]}</span>
       </div>
       <Progress
        status="active"
        percent={(project.capacity[0] / project.capacity[1]) * 100}
       />
       <div className={styles.tags}>
        <h4>Теги: </h4>
        {project.tags.map((tag, i) => (
         <Tag key={i} className={styles.tag}>
          {tag}
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
         <Image src={img} key={i} width={350} />
        ))}
       </Image.PreviewGroup>
      </div>
     </section>
    </div>
   )}
  </>
 );
}
