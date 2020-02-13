import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService, LoginService} from './services';

/* import { HttpTokenInterceptor } from './interceptors/http.token.interceptor'; */

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    /* { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }, */
    ApiService, LoginService
  ],
  declarations: []
})
export class CoreModule {
}
