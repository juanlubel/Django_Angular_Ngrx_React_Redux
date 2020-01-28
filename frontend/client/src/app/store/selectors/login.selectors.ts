import { createSelector } from '@ngrx/store';
import {IAppState} from "../reducers/app.reducers";
import {IUserState} from "../state/login.state";



const selectUsers = (state: IAppState) => state.token;

export const selectToken = createSelector(
  selectUsers,
  (state: IUserState) => state.token
);
