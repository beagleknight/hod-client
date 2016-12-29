import { NgModule }                 from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes }                   from '@angular/router';

import { HomeComponent }            from './home/home.component';
import { LoginComponent }           from './users/login.component';
import { ProfileComponent }         from './users/profile.component';
import { CollectionComponent }      from './collection/collection.component';
import { ListComponent }            from './collection/list.component';
import { SearchComponent }          from './collection/search.component';

const routes: Routes = [
	{ 
		path: '',
		component: HomeComponent,
		children: [
			{
				path: '',
				redirectTo: '/login',
				pathMatch: 'full'
			},
			{ 
				path: 'login',
				component: LoginComponent
			},
			{ 
				path: 'profile',
				component: ProfileComponent
			},
			{ 
				path: 'collection',
				component: CollectionComponent,
				children: [
					{
						path: '',
						component: ListComponent
					},
					{
						path: 'search',
						component: SearchComponent
					}
				]
			}
		]
	}
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }