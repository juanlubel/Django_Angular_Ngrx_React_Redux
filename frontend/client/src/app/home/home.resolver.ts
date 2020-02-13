import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IAppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {GetAllMarket} from "../store/actions/market.actions";
import {MarketService} from "../core/services/market.service";


@Injectable()
export class HomeResolver implements Resolve<string> {

  constructor(private store: Store<IAppState>,
              private router: Router,
              private apiMarket: MarketService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.store.dispatch(new GetAllMarket())
    return this.apiMarket.getAll()
  }
}
