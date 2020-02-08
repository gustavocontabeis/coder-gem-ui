import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AplicacaoService } from './aplicacao.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacaoRoutingModule } from './aplicacao-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [AddComponent, ListComponent],
  imports: [
    CommonModule,
    AplicacaoRoutingModule,
    HttpClientModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    MenubarModule,
  ],
  providers: [MessageService, ConfirmationService, AplicacaoService],
})
export class AplicacaoModule { }
