import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { SidenavService } from './sidenav.service';

describe('SidenavService', () => {


 beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    const service: SidenavService = TestBed.get(SidenavService);
    expect(service).toBeTruthy();
  });
});
