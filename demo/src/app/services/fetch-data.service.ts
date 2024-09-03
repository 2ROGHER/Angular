import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FetchDataService {
  constructor(private _http: HttpClient) {}

  // This is a basic service to fetch data from other endpoints.
  fetchData(page: number): Observable<any> {
    return this._http.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
  }
}
