import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuardService} from "../core/services/auth-guard.service";
import {HomeResolver} from "./home.resolver";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    resolve: {
      market: HomeResolver
    }
  },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {
}
