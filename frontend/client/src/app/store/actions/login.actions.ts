import {Action} from "@ngrx/store";
import {UserLogin, UserToken} from "../../models/user.model";

export enum ELoginActions {
  GetToken = '[User] Get Token',
  GetTokenSuccess = '[User] Get Token Success'
}

export class GetToken implements Action {
  public readonly type = ELoginActions.GetToken;

  constructor(public payload: UserLogin) {
  }
}
export class GetTokenSuccess implements Action {
  public readonly type = ELoginActions.GetTokenSuccess;
  constructor(public payload: UserToken) {
  }
}



export type LoginActions =
  GetToken |
  GetTokenSuccess;
