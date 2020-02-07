import { createSelector } from '@ngrx/store';
import {IUserState} from "../state/login.state";
import {IAppState} from "../state/app.state";



const selectUsers = (state: IAppState) => state.token;

export const selectToken = createSelector(
  selectUsers,
  (state: IUserState) => {
    return state.token ? state.token : localStorage.getItem('jwt')
  }
);
