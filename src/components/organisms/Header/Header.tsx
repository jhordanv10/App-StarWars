import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './Header.scss';

// interface ContainerProps {
//     title: string;
// }

export default function Header() {

    return (
        <IonHeader className='header'>
            <IonTitle className='header-content-title'>Home</IonTitle>
        </IonHeader>
    )
}