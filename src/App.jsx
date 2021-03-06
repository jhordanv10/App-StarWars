import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { carOutline, homeOutline, planetSharp, videocamOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Films from './pages/Films';
import Starships from './pages/StarShips/index.jsx';
import Vehicles from './pages/Vehicles';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/films">
            <Films />
          </Route>
          <Route path="/starships">
            <Starships />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="films" href="/films">
            <IonIcon icon={videocamOutline} />
            <IonLabel>Films</IonLabel>
          </IonTabButton>
          <IonTabButton tab="starships" href="/starships">
            <IonIcon icon={planetSharp} />
            <IonLabel>StarShips</IonLabel>
          </IonTabButton>
          <IonTabButton tab="vehicles" href="/vehicles">
            <IonIcon icon={carOutline} />
            <IonLabel>Vehicles</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
