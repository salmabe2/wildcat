import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  @Input() transparent: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Sobre el proyecto',
        icon: 'pi pi-fw pi-file',
        command: () => this.navigateToSection('about')
      },
      {
        label: 'Bloques',
        icon: 'pi pi-fw pi-pencil',
        routerLink: '/blocks'
      },
      {
        label: 'Áreas de estudio',
        icon: 'pi pi-fw pi-user',
        routerLink: '/study-areas'
      },
      {
        label: 'Publicaciones',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/publications',
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

  navigateToSection(fragment: string): void {
    this.router.navigate(['/home'], { fragment }); // Navigate to /home#fragment
  }
}
