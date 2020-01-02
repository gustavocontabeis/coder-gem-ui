import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pessoa', component: PessoaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
