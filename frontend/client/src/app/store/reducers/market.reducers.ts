import {initialMarketState, MarketState} from "../state/market.state";
import {EMarketActions, MarketActions} from "../actions/market.actions";

export const marketReducers = (
  state = initialMarketState,
  actions: MarketActions
): MarketState => {
  switch (actions.type) {
    case EMarketActions.GetAllMarketSuccess: {
      console.log(state)
      return {
        ...state,
        minerals: actions.payload
      }
    }
    default:
      return state
  }
}
