import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedModule } from '@shared/shared.module';
import { AddressOneComponent } from './components/address-one/address-one.component';
import { AddressTwoComponent } from './components/address-two/address-two.component';


@NgModule({
  declarations: [
    AboutComponent,
    AddressOneComponent,
    AddressTwoComponent
  ],
  imports: [
    CommonModule, 
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
