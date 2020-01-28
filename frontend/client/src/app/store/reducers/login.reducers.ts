import {initialUserState, IUserState} from "../state/login.state";
import {ELoginActions, LoginActions} from "../actions/login.actions";

export const loginReducers = (
  state = initialUserState,
  actions: LoginActions
): IUserState => {
  switch (actions.type) {
    case ELoginActions.GetTokenSuccess: {
      return {
        ...state,
        token: actions.payload.token
      }
    }
    default:
      return state
  }
}
