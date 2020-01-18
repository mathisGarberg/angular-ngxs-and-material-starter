import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  constructor(private http: HttpClient) { }

  getStandings(): Observable<any> {
    return this.http.get(`https://vglive.no/api/vg/tournaments/seasons/1941/standings?type=live-changes`)
      .pipe(shareReplay(1));
  }
}
