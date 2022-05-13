import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContainerComponent } from './containers/characters-container/characters-container.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

import {MatTableModule} from '@angular/material/table';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './store/reducer/characters.reducer';
import { state } from '@angular/animations';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './store/effects/characters.effects';
@NgModule({
  declarations: [
    CharactersContainerComponent,
    CharactersListComponent,
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    StoreModule.forFeature( "charactersState", characterReducer),
    EffectsModule.forRoot([CharactersEffects])
  ]
})
export class CharactersModule { }
