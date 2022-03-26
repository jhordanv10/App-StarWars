import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './StarShips.scss';
import ContainerStarShips from '../../components/organisms/ContainerStarShips/ContainerStarShips';


const StarShips: React.FC = () => {
  return (
    <IonPage className='starships_page'>
      <IonHeader className='starships_page-header'>
        <IonTitle className='starships_page-header-title'>StarShips</IonTitle>
      </IonHeader>

      <IonContent fullscreen>
        <ContainerStarShips />
      </IonContent>
    </IonPage>
  );
};

export default StarShips;
