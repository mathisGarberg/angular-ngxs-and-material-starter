import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { PlTableComponent } from './pl-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlTableComponent', () => {
  let component: PlTableComponent;
  let fixture: ComponentFixture<PlTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlTableComponent ],
      imports: [ SharedModule, HttpClientTestingModule ]
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
