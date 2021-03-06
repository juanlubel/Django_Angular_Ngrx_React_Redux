import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {IUserState} from "../state/login.state";

import {ELoginActions, GetToken, GetTokenSuccess} from '../actions/login.actions'

import {UserToken} from "../../models/user.model";

import {ApiService} from "../../core/services";


@Injectable()
export class LoginEffects {
  @Effect()
  getToken$ = this.actions.pipe(
    ofType<GetToken>(ELoginActions.GetToken),
    map((action: any) => action.payload),
    switchMap( (payload) => {
      console.log('effect', payload)
      return this.apiService.post('auth','/login',payload)}),
    switchMap( (token: UserToken) => of(new GetTokenSuccess(token)))
  )

  constructor(
    private actions : Actions,
    private store : Store<IUserState>,
    private apiService : ApiService
  ) {
  }
}
