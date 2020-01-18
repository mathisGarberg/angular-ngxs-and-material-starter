import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }

  init(): void {
    this.matIconRegistry.addSvgIcon('avfc_logo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/aston-villa-logo.svg'));
  }
}
