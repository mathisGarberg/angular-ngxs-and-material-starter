import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgxsModule } from '@ngxs/store';
import { ProfileState } from './states/profile.state';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    SharedModule,
    NgxsModule.forFeature([ProfileState]),
    NgxsFormPluginModule
  ]
})
export class ProfileModule { }
