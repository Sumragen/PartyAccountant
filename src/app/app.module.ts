import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {PartyModule} from './modules/party/party.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    PartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
