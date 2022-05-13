import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersContainerComponent } from './containers/characters-container/characters-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CharactersContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
