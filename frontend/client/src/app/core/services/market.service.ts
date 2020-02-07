import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(
    private apiService: ApiService
  ) {
  }

  getAll(): Observable<any> {
    console.log('getAll')
    return this.apiService.get('market')
  }

}
