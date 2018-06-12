import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head.component';
import { InputComponent } from './components/input.component';
import { ListComponent } from './components/list.component';
import {CreateService} from './services/create.service';

@NgModule({
  declarations: [
    AppComponent, HeadComponent, InputComponent, ListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CreateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
