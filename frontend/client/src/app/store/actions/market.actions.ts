import {Action} from "@ngrx/store";
import {MineralModel} from "../../models/mineral.model";

export enum EMarketActions {
  GetAllMarket = '[Market] Get Market',
  GetAllMarketSuccess = '[Market] Get Market Success'
}

export class GetAllMarket implements Action {
  public readonly type = EMarketActions.GetAllMarket;
  constructor() {}
}
export class GetAllMarketSuccess implements Action {
  public readonly type = EMarketActions.GetAllMarketSuccess;
  constructor(public payload: MineralModel[]) { }
}

export type MarketActions =
  GetAllMarket |
  GetAllMarketSuccess;
