import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTwoComponent } from './address-two.component';

describe('AddressTwoComponent', () => {
  let component: AddressTwoComponent;
  let fixture: ComponentFixture<AddressTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
