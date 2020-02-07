import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {IUserState} from "../state/login.state";
import {MarketService} from "../../core/services/market.service";
import {EMarketActions, GetAllMarket, GetAllMarketSuccess} from "../actions/market.actions";
import {MineralModel} from "../../models/mineral.model";


@Injectable()
export class MarketEffects {

  @Effect()
  getAllMarket$ = this.actions.pipe(
    ofType<GetAllMarket>(EMarketActions.GetAllMarket),
    switchMap(() => this.apiMarket.getAll()),
    switchMap((market:MineralModel[]) => of(new GetAllMarketSuccess(market)))
  )

  constructor(
    private actions : Actions,
    private store : Store<IUserState>,
    private apiMarket: MarketService
  ) {
  }
}
