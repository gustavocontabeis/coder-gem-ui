import { EntidadeService } from './entidade.service';
import { Component, OnInit } from '@angular/core';
import { Entidade } from './entidade';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { Aplicacao } from '../aplicacao/aplicacao';
import { AplicacaoService } from '../aplicacao/aplicacao.service';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.css']
})
export class EntidadeComponent implements OnInit {

  entidade: Entidade = new Entidade();
  entidades: Entidade[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  aplicacoes: Aplicacao[] = [];
  aplicacoesItem: SelectItem[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private entidadeService: EntidadeService,
    private aplicacaoService: AplicacaoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        console.log(params['id']);
        //this.termoId = (params['coTermo'] && params['coTermo'] != -1) ? Number(params['coTermo']) : null;
    });
    
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.entidade = new Entidade();
    this.entidade.aplicacao = new Aplicacao();

    this.aplicacaoService.consultar().subscribe(resposta => {
      this.aplicacoes = resposta as Aplicacao[];
      console.log('1', this.aplicacoes);
      this.aplicacoesItem = this.aplicacoes.map(function(entry){
        return {label: entry.nome, value: entry};
      });
      console.log('2', this.aplicacoesItem);
      console.log(this.entidades);
    }, error => {
      console.log(error);
      alert('erro entidades.' + error);
    });

  }

  consultar() {
    this.entidadeService.consultar().subscribe(resposta => {
      this.entidades = resposta as Entidade[];
      console.log(this.entidades);
    }, error => {
      console.log(error);
      alert('erro entidades.' + error);
    });
  }

  novo() {
    const entidade = new Entidade();
    this.exibirModal(entidade);
  }

  exibirModal(entidade: Entidade) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    this.entidade = entidade;
    console.log('sssssssssss');
    
    console.log(entidade);

    //this.entidade.aplicacao = new Aplicacao();

  }

  salvar() {
    console.log('salvar');
    this.entidadeService.adicionar(this.entidade).subscribe(resposta => {
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
    this.entidadeService.excluir(this.entidade).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro entidades.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

}

