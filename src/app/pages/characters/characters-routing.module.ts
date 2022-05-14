import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersContainerComponent } from './containers/characters-container/characters-container.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersContainerComponent,

  },
  { path: 'detail',
    pathMatch: 'full',
    component: CharactersDetailComponent
  },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
