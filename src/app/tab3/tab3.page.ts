// import { Component } from '@angular/core';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';

// @Component({
//   selector: 'app-tab3',
//   templateUrl: 'tab3.page.html',
//   styleUrls: ['tab3.page.scss'],
//   imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
  
// })
// export class Tab3Page {
//   constructor() {}
// }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { 
//   IonHeader, 
//   IonToolbar, 
//   IonTitle, 
//   IonContent, 
//   IonCard, 
//   IonCardHeader, 
//   IonCardTitle, 
//   IonCardContent 
// } from '@ionic/angular';

// declare var Html5QrcodeScanner: any;

// @Component({
//   selector: 'app-tab3',
//   templateUrl: 'tab3.page.html',
//   styleUrls: ['tab3.page.scss'],
//   standalone: true,
//   imports: [
//     CommonModule, 
//     IonHeader, 
//     IonToolbar, 
//     IonTitle, 
//     IonContent, 
//     IonCard, 
//     IonCardHeader, 
//     IonCardTitle, 
//     IonCardContent
//   ]
// })
// export class Tab3Page {
//   resultado: string = '';

//   ionViewDidEnter() {
//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
//     scanner.render((texto: string) => {
//       this.resultado = texto;
//     });
//   }
// }

import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var Html5QrcodeScanner: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab3Page {
  resultado: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ionViewDidEnter() {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
    
    scanner.render((texto: string) => {
      this.resultado = texto;
      this.cdr.detectChanges(); // Fuerza a Angular a refrescar la pantalla de inmediato
    });
  }
}