import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FollowButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
