import {MarketState} from "./market.state";
import {IUserState} from "./login.state";

export interface IAppState {
  token: IUserState,
  market: MarketState
}

export const initialAppState: IAppState = {
  token: null,
  market: null
}
