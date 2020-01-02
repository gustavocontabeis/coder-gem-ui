import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService, ConfirmationService} from 'primeng/api';
import { HomeComponent } from './home/home.component';                 //api
import { PessoaComponent } from './pessoa/pessoa.component';	
import { PessoaService } from './pessoa/pessoa.service';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';

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
    PanelModule,
    ToastModule,
    MenubarModule
  ],
  providers: [MessageService, ConfirmationService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
