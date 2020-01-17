import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { MessageService, ConfirmationService, SelectItem } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  pessoas: Pessoa[];
  exibirDialog: boolean;
  novoRegistro: boolean;
  generos: SelectItem[] = [];

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.exibirDialog = false;
    this.novoRegistro = false;
    this.consultar();
    this.pessoa = new Pessoa();
    this.pessoa.genero = null;
    this.generos = [
      {label: 'Selecione', value: null},
      {label: 'M', value: 'M'},
      {label: 'F', value: 'F'}
    ];
  }

  consultar() {
    this.pessoaService.consultar().subscribe(resposta => {
      console.log(resposta);
      this.pessoas = resposta as Pessoa[];
      console.log(this.pessoas);
    }, error => {
      console.log(error);
      alert('erro pessoas.' + error);
    });
  }

  novo() {
    const pessoa = new Pessoa();
    this.exibirModal(pessoa);
  }

  exibirModal(pessoa: Pessoa) {
    this.novoRegistro = true;
    this.exibirDialog = true;
    pessoa.dataDeNacimento = new Date();//TODO
    console.log('exibirModal', pessoa);
    this.pessoa = pessoa;
  }

  salvar() {
    console.log('salvar');
    this.pessoaService.adicionar(this.pessoa).subscribe(resposta => {
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
    this.pessoaService.excluir(this.pessoa).subscribe(resposta => {
      this.consultar();
      this.exibirDialog = false;
      this.novoRegistro = false;
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro pessoas.')
    );
  }

  aoSelecionar(event) {
    this.novoRegistro = false;
  }

}

