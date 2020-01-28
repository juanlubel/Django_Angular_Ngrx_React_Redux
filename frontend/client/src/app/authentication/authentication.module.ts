import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthenticationComponent} from './authentication.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {jqxFormModule} from "jqwidgets-ng/jqxform";


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    jqxFormModule
  ]
})
export class AuthenticationModule {
}
