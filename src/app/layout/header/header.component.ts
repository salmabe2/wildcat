import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Sobre nosotros',
        icon: 'pi pi-fw pi-file'
      },
      {
        label: 'Equipos',
        icon: 'pi pi-fw pi-pencil'
      },
      {
        label: 'Áreas de estudio',
        icon: 'pi pi-fw pi-user',
        routerLink: '/study-areas'
      },
      {
        label: 'Publicaciones',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Proyecto',
            icon: 'pi pi-fw pi-pencil'
          },
          {
            label: 'Científicas',
            icon: 'pi pi-fw pi-calendar-times'
          },
          {
            label: 'Noticias',
            icon: 'pi pi-fw pi-calendar-times'
          }
        ]
      }
    ];
  }
}
