import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EpisodesContainerComponent } from './episodes-container.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/reducer/episodes.reducer';
describe('EpisodesContainerComponent', () => {
  let component: EpisodesContainerComponent;
  let fixture: ComponentFixture<EpisodesContainerComponent>;
  let store: MockStore<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesContainerComponent ],
      imports: [ MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
