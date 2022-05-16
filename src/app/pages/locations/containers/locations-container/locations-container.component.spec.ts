import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/reducer/locations.reducer';

import { LocationsContainerComponent } from './locations-container.component';

describe('LocationsContainerComponent', () => {
  let component: LocationsContainerComponent;
  let fixture: ComponentFixture<LocationsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsContainerComponent ],
      imports: [ MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
