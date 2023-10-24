import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleveLocationPageRoutingModule } from './eleve-location-routing.module';

import { EleveLocationPage } from './eleve-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleveLocationPageRoutingModule
  ],
  declarations: [EleveLocationPage]
})
export class EleveLocationPageModule {}
