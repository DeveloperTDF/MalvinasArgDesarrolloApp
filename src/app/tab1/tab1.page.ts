import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  heartCircleOutline,
  personOutline,
  waterOutline,
  informationCircleOutline,
  callOutline,
  womanOutline,
  manOutline,
  peopleOutline,
  schoolOutline,
  call
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  ]
})
export class Tab1Page {
  constructor() {
    addIcons({
      heartCircleOutline,
      personOutline,
      waterOutline,
      informationCircleOutline,
      callOutline,
      womanOutline,
      manOutline,
      peopleOutline,
      schoolOutline,
      call
    });
  }
}












// import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss'],
//   imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
// })
// export class Tab1Page {
//   constructor() {}
// }
// import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-tab1',
//   templateUrl: 'tab1.page.html',
//   styleUrls: ['tab1.page.scss'],
//   imports: [CommonModule],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class Tab1Page {
//   constructor() {}
// }

