import {UserLogin, UserToken} from "../../models/user.model";

export interface IUserState {
  token: string
}

export const initialUserState: IUserState = {
  token: null
}
