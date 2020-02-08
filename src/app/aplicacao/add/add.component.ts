import { AplicacaoService } from './../aplicacao.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aplicacao } from '../aplicacao';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  aplicacao: Aplicacao = new Aplicacao();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private aplicacaoService: AplicacaoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"] ? Number(params["id"]) : null;
      console.log(id);
      if (id != null) {
      console.log("contem id" + id);
        this.buscar(id);
      }
    });
  }

  buscar(id: number) {
    this.aplicacaoService.buscar(id).subscribe(resposta => {
      this.aplicacao = resposta as Aplicacao;
    }, error => {
      console.log(error);
      alert('erro aplicacoes.' + error);
    });
  }

  novo() {
    this.aplicacao = new Aplicacao();
   }

  salvar() {
    console.log('salvar');
    this.aplicacaoService.adicionar(this.aplicacao).subscribe(resposta => {
      console.log('salvar -> resposta', resposta);
      const aplicacaoSalva = resposta as Aplicacao;
      this.buscar(aplicacaoSalva.id);
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
      this.novo();
      this.messageService.add({severity: 'success', summary: 'OK', detail: 'Registro excluído com sucesso.'});
      }, error => alert('erro aplicacoes.')
    );
  }
  pesquisar(){
    this.router.navigate(['/aplicacao/list']);
  }

  onSubmit(form) {
    console.log(form);
  }
}
