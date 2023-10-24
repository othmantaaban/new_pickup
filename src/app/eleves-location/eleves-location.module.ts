import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevesLocationPageRoutingModule } from './eleves-location-routing.module';

import { ElevesLocationPage } from './eleves-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevesLocationPageRoutingModule
  ],
  declarations: [ElevesLocationPage]
})
export class ElevesLocationPageModule {}
