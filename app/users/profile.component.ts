import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <StackLayout>
      <Label [text]="user?.apiKey"></Label>
    </StackLayout>
  `
})
export class ProfileComponent implements OnInit {
  user: any;

  ngOnInit() {
    this.user = {
      apiKey: 'TODO'
    };
  }
}
