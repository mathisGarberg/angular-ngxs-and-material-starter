import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit, AfterViewInit {

  aboutForm: FormGroup;
  formValueChanged$: Observable<any>;

  @ViewChild('usernameControl', { static: false }) private usernameControl: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();

    this.formValueChanged$ = this.aboutForm.valueChanges.pipe(
      filter(aboutForm => aboutForm.autoSave)
    );
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.usernameControl) {
        this.usernameControl.nativeElement.focus();
      }
    });
  }

  buildForm(): void {
    this.aboutForm = this.formBuilder.group({
      autoSave: new FormControl(false),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      addressOne: new FormGroup({
        street: new FormControl(''),
        zipCode: new FormControl('')
      }),
      addressTwo: new FormGroup({
        street: new FormControl(''),
        zipCode: new FormControl('')
      })
    });
  }

  get addressOneForm() {
    return this.aboutForm.get('addressOne');
  }

  get addressTwoForm() {
    return this.aboutForm.get('addressOne');
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
