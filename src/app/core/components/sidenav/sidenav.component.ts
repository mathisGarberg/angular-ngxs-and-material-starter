import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '@app/core/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidemenu', { static: false }) sideMenu: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.setSideMenu(this.sideMenu);
  }

}
