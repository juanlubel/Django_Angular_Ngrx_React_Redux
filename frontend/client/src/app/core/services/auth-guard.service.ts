import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {LoginService} from "./login.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService) {
  }
  canActivate(): Observable<boolean> {

    return this.loginService.verify().pipe(map(token => {
      localStorage.removeItem('jwt')
      console.log(token);
      if (token) {
        localStorage.setItem('jwt', token.token)
      }
      return !!localStorage.getItem('jwt');
    }))

  }
}
