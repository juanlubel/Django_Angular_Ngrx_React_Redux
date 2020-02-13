import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {IUserState} from "../store/state/login.state";
import {GetToken} from "../store/actions/login.actions";
import {UserLogin, UserToken} from "../models/user.model";
import {LoginService} from "../core/services";
import {Observable} from "rxjs";
import {jqxFormComponent} from "jqwidgets-ng/jqxform";
import {selectToken} from "../store/selectors/login.selectors";
import {Router} from "@angular/router";
import {IAppState} from "../store/state/app.state";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('myForm', {static: false}) myForm: jqxFormComponent;
  columns: Array<jqwidgets.FormTemplateItem> = [
    {
      type: 'button',
      text: 'Sign up',
      width: '90px',
      columnWidth: '50%',
      align: 'right'
    }
  ];
  template: Array<jqwidgets.FormTemplateItem> = [
    {
      bind: 'username',
      type: 'text',
      label: 'Username',
      required: true,
      labelWidth: '85px',
      width: '250px',
      info: 'Enter your Username',
      infoPosition: 'right'
    },
    {
      bind: 'password',
      type: 'password',
      label: 'Password',
      required: true,
      labelWidth: '85px',
      width: '250px',
      info: 'Enter Password',
      infoPosition: 'right'
    },
    {
      columns: this.columns
    }
  ];

  public user: UserLogin
  public token$: Observable<string>

  constructor(
    private loginService: LoginService,
    private store: Store<IAppState>,
    private router: Router
  ) {

  }

  submit() {
    this.store.dispatch(new GetToken(this.user))
    this.token$ = this.store.select(selectToken)
    this.token$.subscribe(res => {
      localStorage.setItem('jwt', res)
      this.router.navigate(['/home'])
    })
  }

  handlerDataForm = (event: any) => {
    this.user = event.args.value
  }

  ngOnInit() {

  }

}
