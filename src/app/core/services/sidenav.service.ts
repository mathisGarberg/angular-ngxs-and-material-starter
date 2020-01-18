import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private sideMenu: MatSidenav;

  public setSideMenu(sidenav: MatSidenav) {
    this.sideMenu = sidenav;
  }

  public toggleSideMenu(): void {
    this.sideMenu.toggle();
  }

  public openSideMenu(): void {
    if (!this.sideMenu) {
      return;
    }
    this.sideMenu.open();
  }

  public closeSideMenu(): void {
    this.sideMenu.close();
  }
}
