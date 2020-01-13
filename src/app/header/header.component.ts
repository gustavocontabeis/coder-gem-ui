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
            url: 'pessoa'
          },
          {
            label: 'Aplicação',
            icon: 'pi pi-fw pi-plus',
            url: 'aplicacao'
          },
          {
            label: 'Entidade',
            icon: 'pi pi-fw pi-plus',
            url: 'entidade'
          },
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];
  }
}
