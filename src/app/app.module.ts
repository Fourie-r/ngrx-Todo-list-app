import { BrowserModule } from '@angular/platform-browser';
import { NgModule, state } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form-component/form.component';
import { ListComponent } from './list-component/list.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore( rootReducer, INITIAL_STATE);
  }
}
