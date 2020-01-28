import {ActionReducerMap} from '@ngrx/store';

import {loginReducers} from "./login.reducers";
import {UserToken} from "../../models/user.model";

export interface IAppState {
  token: any
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  token: loginReducers
};
