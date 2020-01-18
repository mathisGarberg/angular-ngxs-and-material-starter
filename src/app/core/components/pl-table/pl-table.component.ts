import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { MatTableDataSource, MatSort } from '@angular/material';

interface PLTableResultItem {
  leaguePosition: number;
  teamName: string;
  numGames: number;
  points: number;
}

@Component({
  selector: 'app-pl-table',
  templateUrl: './pl-table.component.html',
  styleUrls: ['./pl-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setRowColor (position): String {

    switch (position) {

      case '1': {
        return 'first-place';
      }

      case '2': {
        return 'second-place';
      }

      case '3': {
        return 'third-place';
      }

      case '22':
      case '23':
      case '24': {
        return 'relegation-place';
      }
    }
  }

}
