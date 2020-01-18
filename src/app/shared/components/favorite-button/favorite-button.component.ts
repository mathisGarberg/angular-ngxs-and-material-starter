import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
