import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

class Data {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAll(): Observable<Data[]> {
    return of([]);
  }

  getSingle(id: string): Observable<Data> {
    return of();
  }
}
