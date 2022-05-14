import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsContainerComponent } from './containers/locations-container/locations-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CharactersRoutingModule } from '../characters/characters-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocationsListComponent } from './components/locations-list/locations-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LocationssEffects } from './store/effects/locations.effects';
import { LocationsReducer } from './store/reducer/locations.reducer';


@NgModule({
  declarations: [
    LocationsContainerComponent,
    LocationsListComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MatDialogModule,
    MatPaginatorModule,
    CharactersRoutingModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forFeature( "locationState", LocationsReducer),
    EffectsModule.forRoot([LocationssEffects])
  ]
})
export class LocationsModule { }
function locationsReducer(arg0: string, locationsReducer: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

