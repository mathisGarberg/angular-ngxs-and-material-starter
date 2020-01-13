import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';

import localeNb from '@angular/common/locales/nb';
import { registerLocaleData } from '@angular/common';

// modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';

// state management
import { NgxsModule, StateContext } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';

import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';

// states
// import { UserState } from '@core/states/user.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutModule } from './features/about/about.module';

// import { SidenavService } from '@core/services/sidenav.service';
import { environment } from '@env';

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
    MaterialModule,
    AboutModule,

    // store
    NgxsModule.forRoot([],
      { developmentMode: !environment.production }
    ),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),

    ApplicationInsightsModule.forRoot({ instrumentationKeySetLater: true }),

    // angular
    BrowserModule,
    BrowserAnimationsModule,

    // app
    AppRoutingModule,
  ],
  providers: [
    AppInsightsService,
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
