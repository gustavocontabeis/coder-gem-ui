import { Aplicacao } from '../aplicacao/aplicacao';

export class Entidade {
    id: number;
    aplicacao: Aplicacao;
    nome: string;
    rotulo: string;
    tabela: string;
    atributos: any[];
}
