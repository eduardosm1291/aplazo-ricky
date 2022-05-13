import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
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
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature( "charactersState", characterReducer),
    EffectsModule.forRoot([CharactersEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CharactersModule { }
