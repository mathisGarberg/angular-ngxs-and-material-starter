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

}
