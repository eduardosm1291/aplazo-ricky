import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesContainerComponent } from './containers/episodes-container/episodes-container.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { episodesReducer } from './store/reducer/episodes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EpisodesEffects } from './store/efffects/episodes.effects';


@NgModule({
  declarations: [
    EpisodesContainerComponent,
    EpisodesListComponent,
    EpisodeDetailComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    StoreModule.forFeature( "episodesState", episodesReducer),
    EffectsModule.forRoot([EpisodesEffects])
  ]
})
export class EpisodesModule { }
