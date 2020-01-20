import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { AddressTwoComponent } from './address-two.component';
import { SharedModule } from '@shared/shared.module';

describe('AddressTwoComponent', () => {
  let component: AddressTwoComponent;
  let fixture: ComponentFixture<AddressTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressTwoComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressTwoComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
