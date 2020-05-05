import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app/app.module';
//import {FormbuilderModule} from './app/formbuilder/formbuilder.module';
import {HomeModule} from './app/home/home.module'
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
