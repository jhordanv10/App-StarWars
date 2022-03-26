import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/react';
import ContainerFilms from '../../components/organisms/ContainerFilms';
import './Films.scss';


const Films = () => {
  return (
    <IonPage className='films_page'>
      <IonHeader className='films_page-header'>
        <IonTitle className='films_page-header-title'>Films</IonTitle>
      </IonHeader>

      <IonContent fullscreen className='content_films'>
        <ContainerFilms />
      </IonContent>
    </IonPage>
  );
};

export default Films;
