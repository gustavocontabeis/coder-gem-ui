import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { HomeComponent } from './home/home.component';                 //api
import { PanelModule } from 'node_modules/primeng/panel';
import { PessoaComponent } from './pessoa/pessoa.component';	

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
