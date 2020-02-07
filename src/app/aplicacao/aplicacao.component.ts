import { Component, OnInit } from '@angular/core';
import { Aplicacao } from './aplicacao';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { AplicacaoService } from './aplicacao.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {

  aplicacao: Aplicacao = new Aplicacao();
  aplicacoes: Aplicacao[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  tiposAplicacao: SelectItem[] = [];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private aplicacaoService: AplicacaoService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.aplicacao = new Aplicacao();
  }

  consultar() {
    this.aplicacaoService.consultar().subscribe(resposta => {
      this.aplicacoes = resposta as Aplicacao[];
    }, error => {
      console.log(error);
      alert('erro aplicacoes.' + error);
    });
  }

  novo() {
    const aplicacao = new Aplicacao();
    this.exibirModal(aplicacao);
  }

  exibirModal(aplicacao: Aplicacao) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.aplicacao = aplicacao;
  }

  salvar() {
    console.log('salvar');
    this.aplicacaoService.adicionar(this.aplicacao).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro adicionado com sucesso.'});
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
  }

  confirmarExcluir() {
    console.log('confirmarExcluir');
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir este registro?',
      accept: () => {
          console.log('confirmarExcluir - accept');
          this.excluir();
      },
      reject: () => {
          this.messageService.add({severity: 'success', summary: 'Cancelado', detail: 'Ok. Cancelado.'});
      }
    });
  }

  excluir() {
    console.log('excluir');
    this.aplicacaoService.excluir(this.aplicacao).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro aplicacoes.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

  entidades(aplicacao: Aplicacao){
    this.router.navigate(['/entidades/aplicacao/', aplicacao.id]);
  }

}

