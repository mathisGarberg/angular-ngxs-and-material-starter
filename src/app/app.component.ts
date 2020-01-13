import browser from 'browser-detect';
import { Component, OnInit, OnDestroy } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

// ngxs
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { environment as env } from '@env';
import { AppInsightsService } from '@markpieszak/ng-application-insights';

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
  year = new Date().getFullYear();

  languages = ['en', 'no'];

  navigation = [
    { link: 'about', label: 'anms.menu.about' },
    { link: 'feature-list', label: 'anms.menu.features' },
    { link: 'examples', label: 'anms.menu.examples' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  isAuthorized = false;

  theme$: Observable<string>;

  private subs = new SubSink();

  title = 'angular-material-starter';

  constructor(
    private appInsight: AppInsightsService,
    // private sidenavService: SidenavService,
    private store: Store
  ) {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
