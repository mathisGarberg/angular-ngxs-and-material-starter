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

  data: Array<object> = [
    { name: 'Conor McGregor', wins: 21, losses: 3 },
    { name: 'Tony Ferguson', wins: 23, losses: 3 },
    { name: 'Max Holloway', wins: 19, losses: 3 },
    { name: 'Jon Jones', wins: 22, losses: 1 },
    { name: 'Daniel Cormier', wins: 21, losses: 1 },
    { name: 'Brock Lesnar', wins: 5, losses: 3 }
  ];

  constructor() { }

  getAll(): Observable<Data[]> {
    return of([]);
  }

  getSingle(id: string): Observable<Data> {
    return of();
  }
}
