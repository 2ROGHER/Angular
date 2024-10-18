import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/operators';

@Injectable()
class SearchService {
  uri: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private _http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string): Promise<any> {
    return new Promise((resolve: any, reject: any) => {
      console.log('woring search term');
      let url = `${this.uri}?$term=${term}&media=music&limit=20`;
      this._http
        .get(url)
        .toPromise()
        .then(
          (res: any) => {
            this.results = res.json();
            resolve();
          },
          (error: any) => {
            reject(error);
          }
        );
    });
  }
}

export default SearchService;
