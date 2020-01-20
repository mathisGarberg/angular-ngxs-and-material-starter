import browser from 'browser-detect';
import { Component, OnInit, OnDestroy } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

// ngxs
import { Store, Select } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { environment as env } from '@env';
import { AppInsightsService } from '@markpieszak/ng-application-insights';
import { SettingsState, SettingsStateModel } from './core/states/settings.state';
import { map } from 'rxjs/operators';
import { SidenavService } from './core/services/sidenav.service';
import { ChangeThemeAction } from './core/actions/settings.action';
import { IconService } from './core/services/icon.service';

// import { SidenavService } from '@core/services';

// states and actions

// icons
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isProd = env.production;
  year = new Date().getFullYear();
  // version = env.versions.app;

  languages = ['en', 'no'];

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'feature-list', label: 'News' },
    { link: 'examples', label: 'Forum' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];

  isAuthenticated$: Observable<boolean>;

  theme$: Observable<SettingsStateModel> = this.store.select<SettingsStateModel>(state => state.settings.selectedTheme);
  @Select(SettingsState.getEffectiveTheme) selectedTheme$: Observable<string>;

  private subs = new SubSink();

  title = 'angular-material-starter';

  constructor(
    private appInsight: AppInsightsService,
    private sidenavService: SidenavService,
    private store: Store,
    private iconService: IconService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.iconService.init();

    this.selectedTheme$.subscribe(console.log);

    this.store.dispatch(new ChangeThemeAction('app-dark-theme'));
  }

  // onLoginClick() {
  //   this.store.dispatch(authLogin());
  // }

  // onLogoutClick() {
  //   this.store.dispatch(authLogout());
  // }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
