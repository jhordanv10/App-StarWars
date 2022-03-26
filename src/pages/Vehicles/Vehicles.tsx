import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Vehicles.scss';
import ContainerVehicles from '../../components/organisms/ContainerVehicles/ContainerVehicles';


const Vehicles: React.FC = () => {
    return (
        <IonPage className='vehicles_page'>
            <IonHeader className='vehicles_page-header'>
                <IonTitle className='vehicles_page-header-title'>Vehicles</IonTitle>
            </IonHeader>

            <IonContent fullscreen>
                <ContainerVehicles />
            </IonContent>
        </IonPage>
    );
};

export default Vehicles;