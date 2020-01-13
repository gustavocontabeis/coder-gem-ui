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
import {CheckboxModule} from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { HeaderComponent } from './header/header.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';
import { EntidadeComponent } from './entidade/entidade.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PessoaComponent,
    HeaderComponent,
    AplicacaoComponent,
    EntidadeComponent,
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
    InputTextModule,
    CheckboxModule,
    InputMaskModule,
    ConfirmDialogModule,
    DropdownModule
  ],
  providers: [MessageService, ConfirmationService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
