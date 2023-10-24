import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrajetVoyagesPage } from './trajet-voyages.page';

const routes: Routes = [
  {
    path: '',
    component: TrajetVoyagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrajetVoyagesPageRoutingModule {}
