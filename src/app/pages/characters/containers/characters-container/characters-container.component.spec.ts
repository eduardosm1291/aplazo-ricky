import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../store/reducer/characters.reducer';

import { CharactersContainerComponent } from './characters-container.component';

describe('CharactersContainerComponent', () => {
  let component: CharactersContainerComponent;
  let fixture: ComponentFixture<CharactersContainerComponent>;
  let store: MockStore<any>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersContainerComponent ],
      imports: [   MatDialogModule],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
