import { Component, Input } from '@angular/core';

import { Errors } from '@core/models/error.model';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html'
})
export class ShowErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }

}
