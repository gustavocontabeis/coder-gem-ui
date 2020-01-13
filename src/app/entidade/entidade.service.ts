import { Entidade } from './entidade';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntidadeService {

  apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl + '/entidades';
  }

  adicionar(entidade: Entidade) {
    console.log('adicionar', entidade);
    return this.httpClient.post(this.apiUrl, entidade);
  }

  consultar() {
    console.log('consultar', this.apiUrl);
    return this.httpClient.get(this.apiUrl);
  }

  excluir(entidade: Entidade) {
    console.log('excluir', entidade);
    return this.httpClient.delete(this.apiUrl + '/' + entidade.id);
  }

}

