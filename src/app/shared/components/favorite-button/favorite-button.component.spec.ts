import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteButtonComponent } from './favorite-button.component';

describe('FavoriteButtonComponent', () => {
  let component: FavoriteButtonComponent;
  let fixture: ComponentFixture<FavoriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
