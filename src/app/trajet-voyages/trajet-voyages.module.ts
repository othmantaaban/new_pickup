import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrajetVoyagesPageRoutingModule } from './trajet-voyages-routing.module';

import { TrajetVoyagesPage } from './trajet-voyages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrajetVoyagesPageRoutingModule
  ],
  declarations: [TrajetVoyagesPage]
})
export class TrajetVoyagesPageModule {}
