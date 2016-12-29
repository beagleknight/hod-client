import { Component } from '@angular/core';

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
  login() {
    tnsOAuthModule.login()
      .then(() => {
        console.dir("accessToken " + tnsOAuthModule.accessToken());
      })
      .catch((er) => {
        //do something with the error
      });
  }
}
