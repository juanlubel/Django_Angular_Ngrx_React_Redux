import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, Operator, OperatorFunction, PartialObserver, Subscriber, throwError, Unsubscribable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserToken} from "../../models/user.model";


@Injectable()
export class ApiService implements OnInit {

  constructor(
    private http: HttpClient
  ) {

  }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit() {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
    })
  }

  get(path: string, type: string = '/', id: string = '') {
    console.log(`${environment[path]}${type}${id}`);
    return this.http.get(`${environment[path]}${type}${id}`, this.httpOptions)
      .pipe(catchError(ApiService.formatErrors));
  }

  // tslint:disable-next-line:ban-types
  post(path: string, type: string, body: Object = {}): Observable<any> {
    console.log(`${environment[path]}${type}`);
    return this.http.post(`${environment[path]}${type}`, body)
      .pipe(catchError(ApiService.formatErrors));
  }

  // tslint:disable-next-line:ban-types
  // put(path: string, body: User): Observable<any> {
  //   console.log(`${environment[path]}${body.slug}`);
  //   return this.http.put(`${environment[path]}${body.slug}`, JSON.stringify(body))
  //     .pipe(catchError(ApiService.formatErrors));
  // }
  // tslint:disable-next-line:ban-types
  login(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment[path]}login`, JSON.stringify(body))
      .pipe(catchError(ApiService.formatErrors));
  }
}
