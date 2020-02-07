import {ActionReducerMap} from '@ngrx/store';

import {loginReducers} from "./login.reducers";
import {IAppState} from "../state/app.state";
import {marketReducers} from "./market.reducers";

export const appReducers: ActionReducerMap<IAppState, any> = {
  token: loginReducers,
  market: marketReducers
};
