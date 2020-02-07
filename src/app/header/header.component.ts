import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastro',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-plus',
            url: 'home'
          },
          {
            label: 'Pessoa',
            icon: 'pi pi-fw pi-plus',
            url: 'pessoas'
          },
          {
            label: 'Aplicação',
            icon: 'pi pi-fw pi-plus',
            url: 'aplicacoes'
          },
          {
            label: 'Entidade',
            icon: 'pi pi-fw pi-plus',
            url: 'entidades'
          },
        ]
      },
    ];
  }
}
