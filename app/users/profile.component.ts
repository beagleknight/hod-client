import { Component, OnInit } from '@angular/core';
import { Angular2Apollo }    from 'angular2-apollo';
import gql                   from 'graphql-tag';

import * as tnsOAuthModule   from 'nativescript-oauth';

const createUser = gql`
  mutation createUser($token: String!) {
    createUserFromFacebook(token: $token) {
      id,
      name,
      email
    }
  }
`;

@Component({
  selector: 'profile',
  template: `
    <StackLayout>
      <Label [text]="user?.id"></Label>
      <Label [text]="user?.name"></Label>
      <Label [text]="user?.email"></Label>
    </StackLayout>
  `
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private _apollo: Angular2Apollo) {}

  ngOnInit() {
    this._loadUser();
  }

  _loadUser() {
    this._apollo.mutate({
      mutation: createUser,
      variables: {
        token: tnsOAuthModule.accessToken() 
      }
    }).subscribe(({ data }) => {
      this.user = data.createUserFromFacebook;
    });
  }
}
