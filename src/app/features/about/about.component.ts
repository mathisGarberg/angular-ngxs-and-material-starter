import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  aboutForm: FormGroup;
  formValueChanged$: Observable<any>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();

    this.formValueChanged$ = this.aboutForm.valueChanges.pipe(
      filter(aboutForm => aboutForm.autoSave)
    );
  }

  buildForm(): void {
    this.aboutForm = this.formBuilder.group({
      autoSave: [false],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.aboutForm.valid) {
      // this.saveForm();
    }
  }

  resetForm(): void {
    this.aboutForm.reset();
    this.aboutForm.clearValidators();
    this.aboutForm.clearAsyncValidators();
  }

}
