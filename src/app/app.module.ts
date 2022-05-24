import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAreaComponent } from './components/create-area/create-area.component';
import { ListAreaComponent } from './components/list-area/list-area.component';
import { AppRoutingModule } from '../modules/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateAreaComponent,
    ListAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
