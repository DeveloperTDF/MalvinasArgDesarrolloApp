// import { Component } from '@angular/core';
// import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss'],
//   imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })
// export class Tab2Page {

//   constructor() {}

// }
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
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { qrCodeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    IonItem,
    IonLabel,
    IonIcon
  ]
})
export class Tab2Page {
  constructor() {
    addIcons({ qrCodeOutline });
  }
}