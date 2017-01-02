import { Component }       from '@angular/core';
import { Router }          from '@angular/router';

import { AuthService }     from './auth.service';


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
  constructor(private _router: Router, private _auth: AuthService) {}

  login() {
    this.isLoading = true;
    this._auth.signUpFromFacebook()
      .subscribe((data) => {
        console.log(JSON.stringify(data));
        this._router.navigate(['profile']);        
      }, (err) => {
        console.error(err);        
      }, () => {
        this.isLoading = false;
      });
  }
}
