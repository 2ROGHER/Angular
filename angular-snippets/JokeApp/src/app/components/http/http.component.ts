import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import 'rxjs/operators'; // included all obervale operators.
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss',
})
export class HttpComponent {
  uri: string = 'http://httpbin.org';

  constructor(private _http: HttpClient) {}

  doGET() {
    console.log('GET');
    window.alert('OK!, We are going to requesting at the url: ' + this.uri);
    let url = `${this.uri}/get`;
    this._http
      .get(url, {
        // here we cand add (query parms with other libary (as URLSearchParams))
      })
      .subscribe((res: any) => console.log(res));
  }
  doPOST() {
    console.log('POST');
    let url = `${this.uri}/post`;
    this._http
      .post(url, { foo: 'foo', bar: 'bar' })
      .subscribe((res: any) => console.log(res));
  }
  doPUT() {
    console.log('PUT');
  }
  doDELETE() {
    console.log('DELETE');
    let url = `${this.uri}/delete`;
    this._http.delete(url).subscribe((res: any) => console.log(res));
  }
  doGETAsPromise() {
    console.log('GET AS PROMISE');
    let url = `${this.uri}/get`;
    this._http
      .get(url)
      .toPromise()
      .then((res: any) => console.log(res));
  }
  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    let url = `${this.uri}/post`;
    this._http
      .get(url)
      .toPromise()
      .then(
        (res: any) => console.log(res),
        (error: any) => console.log(error) // control de errores en Promesas.
      ); //this an error.
  }
  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    let url = `${this.uri}/post`;
    this._http.get(url).subscribe(
      (res: any) => console.log(res),
      (error: any) => console.log(error) // control de errores en Promes;
    );
  }
  doGETWithHeaders() {
    console.log('GET WITH HEADERS');
    let headers = new HttpHeaders();
    headers.append('Authorization', btoa('username:password'));
    let url = `${this.uri}/get`;
    this._http.get(url, { headers }).subscribe((res: any) => console.log(res));
  }
}
