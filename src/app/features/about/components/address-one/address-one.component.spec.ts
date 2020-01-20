import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddressOneComponent } from './address-one.component';
import { SharedModule } from '@shared/shared.module';

describe('AddressOneComponent', () => {
  let component: AddressOneComponent;
  let fixture: ComponentFixture<AddressOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressOneComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressOneComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
