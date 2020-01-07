import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem, MessageService, ConfirmationService} from 'primeng/api';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';	
import { PessoaService } from './pessoa/pessoa.service';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';

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
    MenubarModule,
    TableModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    InputTextModule
  ],
  providers: [MessageService, ConfirmationService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
