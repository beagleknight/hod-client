// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

global.process =  {env: {}};

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
