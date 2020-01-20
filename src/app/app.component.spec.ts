import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@core/components/navbar/navbar.component';
import { ContentWrapperComponent } from './core/components/content-wrapper/content-wrapper.component';
import { SharedModule } from '@shared/shared.module';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PlTableComponent } from './core/components/pl-table/pl-table.component';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { Store, NgxsModule } from '@ngxs/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        NgxsModule.forRoot(),
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        SidenavComponent,
        ContentWrapperComponent,
        FooterComponent,
        PlTableComponent
      ],
      providers: [
        AppInsightsService,
        Store,

      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'angular-material-starter'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('angular-material-starter');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-material-starter!');
  // });
});
