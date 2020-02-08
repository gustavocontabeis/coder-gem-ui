import { AplicacaoService } from './../aplicacao.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aplicacao } from '../aplicacao';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  aplicacoes: Aplicacao[];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private aplicacaoService: AplicacaoService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.aplicacaoService.consultar().subscribe(resposta => {
      this.aplicacoes = resposta as Aplicacao[];
    }, error => {
      console.log(error);
      alert('erro aplicacoes.' + error);
    });
  }
}
