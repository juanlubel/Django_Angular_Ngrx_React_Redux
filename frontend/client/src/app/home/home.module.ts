import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {AuthGuardService} from "../core/services/auth-guard.service";
import {HomeResolver} from "./home.resolver";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [AuthGuardService, HomeResolver]
})
export class HomeModule { }
