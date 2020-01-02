import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService, ConfirmationService} from 'primeng/api';
import { HomeComponent } from './home/home.component';                 //api
import { PanelModule } from 'node_modules/primeng/panel';
import { PessoaComponent } from './pessoa/pessoa.component';	
import { PessoaService } from './pessoa/pessoa.service';

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
    HttpClientModule,
    AccordionModule,
    PanelModule
  ],
  providers: [MessageService, ConfirmationService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
