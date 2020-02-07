import {MineralModel} from "../../models/mineral.model";

export interface MarketState {
  minerals: MineralModel[]
}

export const initialMarketState: MarketState = {
  minerals: null
}
