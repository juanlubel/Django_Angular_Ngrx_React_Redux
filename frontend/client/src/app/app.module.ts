import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {jqxNavBarModule} from "jqwidgets-ng/jqxnavbar";
import {jqxButtonModule} from "jqwidgets-ng/jqxbuttons";
import {CoreModule} from "./core";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./store/reducers/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./store/effects/login.effects";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,

    /*Redux*/
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([LoginEffects]),

    /*nav bar*/
    jqxNavBarModule,
    jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
