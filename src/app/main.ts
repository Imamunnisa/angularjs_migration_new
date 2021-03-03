import 'angular';
import 'angular-resource';
import 'angular-animate';
import 'ng-infinite-scroll';
import 'angular-spinner';
import 'angular-auto-validate/dist/jcs-auto-validate';
import 'angular-ladda';
import 'angular-strap';
import 'angularjs-toaster';
import 'angular-ui-router';

import './app.main';
import './services';
//import './directives';
import './filters';
//import './controllers';
import './components';
import './app.routes';
import './polyfills.ts';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { Contact } from './services/contact.resource';
import { SearchComponent } from './components/search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [
      BrowserModule,
      UpgradeModule,
      FormsModule,
      HttpClientModule,
    ReactiveFormsModule
     
    ],
    declarations: [
      SearchComponent
    ]
   
  })
  
  export class AppModule {
    // Override Angular bootstrap so it doesn't do anything
    ngDoBootstrap() {
    }
  }
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log("Bootstrapping in Hybrid mode with Angular & AngularJS");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ['codecraft']);
  });
