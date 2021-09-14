import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api: any;

  constructor(private http: HttpClient) { 

   }


  getReq(url: string = "https://jsonplaceholder.typicode.com/photos") {
    return this.http.get(url).subscribe(api => this.api = api )
  }

  postReq(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(url, data, options);
  }

  updateReq(url: string, data: any, options: any): Observable<any> {
    return this.http.put(url, data, options);
  }

  httpHandleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
    }
}
