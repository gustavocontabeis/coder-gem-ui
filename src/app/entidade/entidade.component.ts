import { EntidadeService } from './entidade.service';
import { Component, OnInit } from '@angular/core';
import { Entidade } from './entidade';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { Aplicacao } from '../aplicacao/aplicacao';

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
  tiposEntidade: SelectItem[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private entidadeService: EntidadeService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.entidade = new Entidade();
    this.entidade.aplicacao = new Aplicacao();
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

