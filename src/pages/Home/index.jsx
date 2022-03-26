import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/react';
import ContainerHome from '../../components/organisms/ContainerHome';
import './Home.scss';


const Home = () => {
  return (
    <IonPage className='home_page'>
      <IonHeader className='home_page-header'>
        <IonTitle className='home_page-header-title'>Home</IonTitle>
      </IonHeader>
      
      <IonContent fullscreen>
        <ContainerHome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
