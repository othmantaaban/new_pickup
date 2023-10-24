import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevesLocationPage } from './eleves-location.page';

const routes: Routes = [
  {
    path: '',
    component: ElevesLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevesLocationPageRoutingModule {}
