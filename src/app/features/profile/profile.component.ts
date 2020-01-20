import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProfileState } from './states/profile.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  @Select(ProfileState.details) details$: Observable<any>;
  @Select(ProfileState.name) text$: Observable<any>;

  newProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();

    this.details$.subscribe(console.log);
    this.text$.subscribe(console.log);
  }

  onSubmit() {
    //
    console.log(this.newProfileForm.value);
  }

  ngOnInit(): void {
  }

  buildForm(): void {
    this.newProfileForm = this.formBuilder.group({
      text: new FormControl(null)
    });
  }

  // UpdateFormStatus({ status, path }) - Update the form status
  // UpdateFormValue({ value, path, propertyPath? }) - Update the form value (or optionally an inner property value)
  // UpdateFormDirty({ dirty, path }) - Update the form dirty status
  // SetFormDisabled(path) - Set the form to disabled
  // SetFormEnabled(path) - Set the form to enabled
  // SetFormDirty(path) - Set the form to dirty (shortcut for UpdateFormDirty)
  // SetFormPristine(path) - Set the form to pristine (shortcut for UpdateFormDirty)
}
