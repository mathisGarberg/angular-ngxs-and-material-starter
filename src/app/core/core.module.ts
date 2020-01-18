import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PlTableComponent } from './components/pl-table/pl-table.component';

// state management
import { NgxsModule, StateContext } from '@ngxs/store';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';

import { environment } from '@env';

import { MaterialModule } from '@shared/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthModule } from './auth/auth.module';

import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    ContentWrapperComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidenavComponent,
    PlTableComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,

    MaterialModule,
    FontAwesomeModule,

    AuthModule,
    // store
    NgxsModule.forRoot([],
      { developmentMode: !environment.production }
    ),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),

    ApplicationInsightsModule.forRoot({ instrumentationKeySetLater: true }),
  ],
  providers: [
    AppInsightsService,
  ]
})
export class CoreModule { }
