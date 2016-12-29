import { Component } from '@angular/core';

@Component({
  selector: 'list',
  template: `
    <StackLayout>
      <Button [nsRouterLink]="['search']" text="Add new boardgame"></Button>
    </StackLayout>
  `
})
export class ListComponent {}