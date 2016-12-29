import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import * as tnsOAuthModule from 'nativescript-oauth';

@Component({
  selector: 'login',
  template: `
    <StackLayout>
      <Button text="Login with Facebook" (tap)="login()"></Button>
      <ActivityIndicator [busy]="isLoading" [visibility]="isLoading ? 'visible' : 'collapse'" row="1" horizontalAlignment="center" verticalAlignment="center"></ActivityIndicator>
    </StackLayout>
  `
})
export class LoginComponent {
  isLoading: boolean = false;
  constructor(private _router: Router) {}

  login() {
    this.isLoading = true;
    tnsOAuthModule.login()
      .then(() => {
        this.isLoading = false;
        this._router.navigate(['profile']);
      })
      .catch((er) => {
        //do something with the error
      });
  }
}
