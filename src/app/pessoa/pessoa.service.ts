import { Pessoa } from './pessoa';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/pessoas';
  }

  adicionar(pessoa: Pessoa) {
    console.log('adicionar', pessoa);
    return this.httpClient.post(this.apiUrl, pessoa);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(pessoa: Pessoa) {
    console.log('excluir', pessoa);
    return this.httpClient.delete(this.apiUrl + '/' + pessoa.id);
  }

}
