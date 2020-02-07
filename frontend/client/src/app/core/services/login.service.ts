import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private apiService: ApiService
  ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  login(type: string, params: object): Observable <any> {
    return this.apiService.post( 'auth','/login', params);
  }

  verify(): Observable <any> {
    return this.apiService.post( 'auth','/user', {token :localStorage.getItem('jwt')});
  }

}
