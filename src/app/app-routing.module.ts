import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'characteres'
  },
  {
    path: 'characters',
    pathMatch: 'full',
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'locations',
    pathMatch: 'full',
    loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: 'episodes',
    pathMatch: 'full',
    loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
