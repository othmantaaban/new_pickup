import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleveLocationPage } from './eleve-location.page';

const routes: Routes = [
  {
    path: '',
    component: EleveLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleveLocationPageRoutingModule {}
