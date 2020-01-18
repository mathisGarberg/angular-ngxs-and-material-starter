import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { SidenavService } from '@app/core/services/sidenav.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Input() public isActivated: boolean;

  stickyHeader$: Observable<boolean>;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {

  }

  toggleSideMenu(): void {
    this.sidenavService.toggleSideMenu();
  }

}
