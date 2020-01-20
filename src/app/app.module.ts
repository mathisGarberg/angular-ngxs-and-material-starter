import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ErrorHandler, Injectable } from '@angular/core';

import localeNb from '@angular/common/locales/nb';
import { registerLocaleData } from '@angular/common';

import * as Sentry from '@sentry/browser';

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
import { SettingsModule } from './features/settings/settings.module';

export function initializeApp(appInitService: ConfigService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}


registerLocaleData(localeNb);

Sentry.init({
  dsn: 'https://ec12a75c643b47a6b5a881cec08c374d@sentry.io/1889115'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    const eventId = Sentry.captureException(error.originalError || error);
    Sentry.showReportDialog({ eventId });
  }
}

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
    SettingsModule,

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
    { provide: LOCALE_ID, useValue: 'nb' },
    // { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
