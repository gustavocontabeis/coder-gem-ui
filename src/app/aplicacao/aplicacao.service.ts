import { Aplicacao } from './aplicacao';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/aplicacoes';
  }

  adicionar(aplicacao: Aplicacao) {
    console.log('adicionar', aplicacao);
    return this.httpClient.post(this.apiUrl, aplicacao);
  }

  buscar(id: number) {
    console.log('buscar', this.apiUrl);
    return this.httpClient.get(this.apiUrl + '/' + id);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(aplicacao: Aplicacao) {
    console.log('excluir', aplicacao);
    return this.httpClient.delete(this.apiUrl + '/' + aplicacao.id);
  }

}

