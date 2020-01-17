import { EntidadeComponent } from './entidade/entidade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { AplicacaoComponent } from './aplicacao/aplicacao.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'aplicacao', component: AplicacaoComponent },
  { path: 'entidade', component: EntidadeComponent },
  { path: 'entidade/aplicacao/:id', component: EntidadeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
