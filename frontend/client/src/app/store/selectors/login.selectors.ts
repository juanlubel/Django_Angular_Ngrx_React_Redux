import { createSelector } from '@ngrx/store';
import {IUserState} from "../state/login.state";
import {IAppState} from "../state/app.state";



const selectUsers = (state: IAppState) => state.token;

export const selectToken = createSelector(
  selectUsers,
  (state: IUserState) => {
    console.log(state.token);
    return state.token ? state.token : localStorage.getItem('jwt')
  }
);


// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Imp1YW5sdSIsImV4cCI6MTU4MTA4Njc1NSwiZW1haWwiOiJqdWFubHVAanVhbmx1LmVzIn0.x3POv3BzLEfTQan59-eLbCGkMSZKePSjFiOpGeXEwzM
