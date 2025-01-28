import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
	selector: 'app-header',
	imports: [RouterModule, Menubar],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	public items: MenuItem[] = [
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

	@Input() public transparent: boolean = false;

	constructor(private router: Router) {}

	navigateToSection(fragment: string): void {
		this.router.navigate(['/'], { fragment });
	}
}
