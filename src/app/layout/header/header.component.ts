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
        icon: 'pi pi-info-circle',
        command: () => this.navigateToSection('about')
      },
      {
        label: 'Colaboradores',
        icon: 'pi pi-user',
        routerLink: '/partners'
      },
      {
        label: 'Áreas de estudio',
        icon: 'pi pi-map-marker',
        routerLink: '/study-areas'
      },
      {
        label: 'Publicaciones',
        icon: 'pi pi-file',
        routerLink: '/publications'
      }
    ];
  }

  navigateToSection(fragment: string): void {
    this.router.navigate(['/home'], { fragment }); // Navigate to /home#fragment
  }
}
