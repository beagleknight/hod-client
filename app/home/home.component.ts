import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <GridLayout rows="*,auto">
      <router-outlet row="0"></router-outlet>
      <GridLayout row="1" columns="*,*,*">
        <Button [nsRouterLink]="['/profile']" text="Profile" col="0"></Button>
        <Button [nsRouterLink]="['/collection']" text="My collection" col="1"></Button>
        <Button text="Friends" col="2"></Button>        
      </GridLayout>
    </GridLayout>
  `
})
export class HomeComponent {}
