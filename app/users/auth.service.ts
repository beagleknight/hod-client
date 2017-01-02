import { Injectable }          from '@angular/core';
import { Angular2Apollo  }     from 'angular2-apollo';
import { Observable }          from 'rxjs/Observable';
import gql                     from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as tnsOAuthModule     from 'nativescript-oauth';

const createUser = gql`
  mutation createUser($token: String!) {
    createUserFromFacebook(token: $token) {
      apiKey
    }
  }
`;

@Injectable()
export class AuthService {
  constructor(private _apollo: Angular2Apollo) {}

  signUpFromFacebook(): Observable<any> {
    return Observable.fromPromise(tnsOAuthModule.login())
      .switchMap(token => {
        console.log(token);
        return this._apollo.mutate({
          mutation: createUser,
          variables: {
            token: tnsOAuthModule.accessToken() 
          }
        });
      })
      .map(({ data }) => {
        return data.createUserFromFacebook;
      });
  }
}
