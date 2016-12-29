import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import * as tnsOAuthModule from 'nativescript-oauth';

@Component({
  selector: 'login',
  template: `
    <StackLayout>
      <Button text="Login with Facebook" (tap)="login()"></Button>
    </StackLayout>
  `
})
export class LoginComponent {
  constructor(private _router: Router) {}

  login() {
    tnsOAuthModule.login()
      .then(() => {
        this._router.navigate(['profile']);
      })
      .catch((er) => {
        //do something with the error
      });
  }
}
