import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesContainerComponent } from './containers/episodes-container/episodes-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EpisodesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
