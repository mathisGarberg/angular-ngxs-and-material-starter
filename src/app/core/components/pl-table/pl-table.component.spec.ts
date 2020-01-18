import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlTableComponent } from './pl-table.component';

describe('PlTableComponent', () => {
  let component: PlTableComponent;
  let fixture: ComponentFixture<PlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
