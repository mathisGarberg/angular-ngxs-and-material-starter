import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressOneComponent } from './address-one.component';

describe('AddressOneComponent', () => {
  let component: AddressOneComponent;
  let fixture: ComponentFixture<AddressOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
