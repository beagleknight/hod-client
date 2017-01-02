// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

global.process =  {env: {}};

import { AppModule } from "./app.module";

import * as tnsOAuthModule from 'nativescript-oauth';

import { facebookInitOptions } from './facebook_init_options';

tnsOAuthModule.initFacebook(facebookInitOptions);

platformNativeScriptDynamic().bootstrapModule(AppModule);
