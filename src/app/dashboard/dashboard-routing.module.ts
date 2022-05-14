import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path: ''
    ,component:DashboardContainerComponent,
    children: [
      {
        path:'',
        pathMatch: 'full',

        redirectTo: 'characters',
      },
      {
        path: 'characters',
        pathMatch: 'full',
        loadChildren: () => import('../pages/characters/characters.module').then(m => m.CharactersModule)
      },
      {
        path: 'locations',
        pathMatch: 'full',
        loadChildren: () => import('../pages/locations/locations.module').then(m => m.LocationsModule)
      },
      {
        path: 'episodes',
        pathMatch: 'full',
        loadChildren: () => import('../pages/episodes/episodes.module').then(m => m.EpisodesModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
