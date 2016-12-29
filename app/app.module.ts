import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import ApolloClient, { createNetworkInterface  } from 'apollo-client';
import { ApolloModule } from 'angular2-apollo';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from "./app.component";

import { ItemService } from './item.service';

import { LoginComponent } from "./users/login.component";
import { ProfileComponent } from "./users/profile.component";

import { ItemsComponent } from "./items.component";
import { ItemDetailComponent } from "./item-detail.component";

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
        LoginComponent,
        ProfileComponent,
        ItemsComponent,
        ItemDetailComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
