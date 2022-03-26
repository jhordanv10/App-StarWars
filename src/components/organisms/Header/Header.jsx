import { IonHeader, IonTitle } from '@ionic/react';
import './Header.scss';

export default function Header() {

    return (
        <IonHeader className='header'>
            <IonTitle className='header-content-title'>Home</IonTitle>
        </IonHeader>
    )
}