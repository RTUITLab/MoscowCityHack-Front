import styles from '../../../styles/eventPage.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button, Image, Progress, Divider } from 'antd';

export default function EventPage() {
 const router = useRouter();
 const [project, setProject] = useState('empty');
 const { eventId } = router.query;
 function getData() {
  try {
   setProject({
    title: 'Волонтеры охотники за приведениями',
    imgSrc:
     'https://images.unsplash.com/photo-1634840647366-e755dc76882d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
    directions: [
     'природа',
     'приведения',
     'донорство',
     'донорство',
     'донорство',
    ],
    companyName: 'название компании тут: добрые дела',
    address: 'адрес проспект вернадского',
    tags: ['tag', 'tag', 'tag', 'tag'],
    capacity: [6, 10], //[занято,всего]
    date: 5361277778935,
    taskDescription: [
     'поимка приведений',
     'мытье пола',
     'ааааааа',
     'ааааааа',
     'ааааааа',
     'ааааааа',
    ],
    requirements: [
     'прохождение обучения',
     'есть машина',
     'любите зефир',
     'старше 18',
    ],
    facilities: ['питание', 'поможем лайками'],
    materials: [
     'https://images.unsplash.com/photo-1634840647366-e755dc76882d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
     'https://images.unsplash.com/photo-1634840647366-e755dc76882d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
     'https://images.unsplash.com/photo-1634840647366-e755dc76882d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
     'https://images.unsplash.com/photo-1634840647366-e755dc76882d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80',
    ],
   });
  } catch (err) {
   setProject('empty');
  }
 }
 useEffect(() => {
  getData();
 }, [eventId]);
 return (
  <>
   {project === 'empty' ? (
    <></>
   ) : (
    <div className={styles.eventWrapper}>
     <header className={styles.projectHead}>
      <h2>{project.title}</h2>
      <Button size="large">Участники</Button>
     </header>
     <section className={styles.projectTop}>
      <Image src={project.imgSrc} width={700} />
      <div className={styles.imgAside}>
       <h4>Направления</h4>
       <div className={styles.directions}>
        {project.directions.map((direction, i) => (
         <Button key={i} size="large" className={styles.direction}>
          {direction}
         </Button>
        ))}
       </div>
       <Divider />
       <span className={styles.texts}>{project.companyName}</span>
       <span className={styles.texts}>{project.address}</span>
       <span className={styles.texts}>{new Date(project.date).toString()}</span>

       <div
        style={{
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         width: '100%',
        }}>
        <span>Осталось мест</span>
        <span>{project.capacity[0] + '/' + project.capacity[1]}</span>
       </div>
       <Progress
        status="active"
        percent={(project.capacity[0] / project.capacity[1]) * 100}
       />
       <Divider />
       <h4>Теги</h4>

       <div className={styles.tags}>
        {project.tags.map((tag, i) => (
         <Button key={i} className={styles.tag}>
          {tag}
         </Button>
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
      <div className={styles.materials}>
       {project.materials.map((img, i) => (
        <Image src={img} key={i} width={400} />
       ))}
      </div>
     </section>
    </div>
   )}
  </>
 );
}
