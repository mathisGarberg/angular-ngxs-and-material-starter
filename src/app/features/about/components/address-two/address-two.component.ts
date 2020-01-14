import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-two',
  templateUrl: './address-two.component.html',
  styleUrls: ['./address-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressTwoComponent implements OnInit {
  @Input() addressTwoForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
