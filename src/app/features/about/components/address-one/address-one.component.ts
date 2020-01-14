import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-one',
  templateUrl: './address-one.component.html',
  styleUrls: ['./address-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressOneComponent implements OnInit {
  @Input() addressOneForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
