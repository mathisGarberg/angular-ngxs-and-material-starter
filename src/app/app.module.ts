import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';

import localeNb from '@angular/common/locales/nb';
import { registerLocaleData } from '@angular/common';

// modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';

// states
// import { UserState } from '@core/states/user.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './features/home/home.module';
import { AboutModule } from './features/about/about.module';
import { ProfileModule } from './features/profile/profile.module';

// import { SidenavService } from '@core/services/sidenav.service';

import { ConfigService } from '@app/config.service';

export function initializeApp(appInitService: ConfigService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

registerLocaleData(localeNb);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // core & shared
    CoreModule,
    SharedModule,

    // hot-loaded features
    HomeModule,
    AboutModule,
    ProfileModule,

    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // app
    AppRoutingModule,
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService],
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'nb' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
