import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigInputComponent } from './components/big-input/big-input.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';

library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
);

@NgModule({
  declarations: [
    BigInputComponent,
    ShowErrorsComponent,
    FavoriteButtonComponent,
    FollowButtonComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,

  ]
})
export class SharedModule { }
