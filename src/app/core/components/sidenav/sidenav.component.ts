import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '@app/core/services/sidenav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  navigation = [
    { link: 'about', label: 'About' },
    { link: 'feature-list', label: 'News' },
    { link: 'examples', label: 'Forum' }
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];

  stickyHeader$: Observable<boolean>;

  theme$: Observable<string>;

  @ViewChild('sidemenu', { static: false }) sideMenu: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.sidenavService.setSideMenu(this.sideMenu);
  }

}
