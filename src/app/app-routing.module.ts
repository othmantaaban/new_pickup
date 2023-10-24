import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trajets',
    pathMatch: 'full'
  },
  {
    path: 'trajets',
    loadChildren: () => import('./trajets/trajets.module').then( m => m.TrajetsPageModule)
  },
  {
    path: 'trajet/:id',
    loadChildren: () => import('./trajet-voyages/trajet-voyages.module').then( m => m.TrajetVoyagesPageModule)
  },
  {
    path: 'eleve-location/:id',
    loadChildren: () => import('./eleve-location/eleve-location.module').then( m => m.EleveLocationPageModule)
  },
  {
    path: 'eleves-location',
    loadChildren: () => import('./eleves-location/eleves-location.module').then( m => m.ElevesLocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
