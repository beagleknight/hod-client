import { NgModule, NO_ERRORS_SCHEMA }            from "@angular/core";
import { NativeScriptModule }                    from "nativescript-angular/platform";
import ApolloClient, { createNetworkInterface  } from 'apollo-client';
import { ApolloModule }                          from 'angular2-apollo';

import { AppRoutingModule }                      from './app.routing';
import { AppComponent }                          from "./app.component";

import { AuthService }                           from './users/auth.service';

import { HomeComponent }                         from "./home/home.component";
import { LoginComponent }                        from "./users/login.component";
import { ProfileComponent }                      from "./users/profile.component";
import { CollectionComponent }                   from './collection/collection.component';
import { ListComponent }                         from './collection/list.component';
import { SearchComponent }                       from './collection/search.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql'
  }),
});

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ApolloModule.withClient(client)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProfileComponent,
        CollectionComponent,
        ListComponent,
        SearchComponent
    ],
    providers: [
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
