import {createSelector} from '@ngrx/store';

import {IAppState} from "../state/app.state";
import {MarketState} from "../state/market.state";

const selectMarket = (state: IAppState) => state.market

export const selectMineralsList = createSelector(
  selectMarket,
  (state: MarketState) => {
    console.log(state);
    return state.minerals}
)
