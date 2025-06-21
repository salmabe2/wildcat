import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
	selector: 'app-header',
	imports: [RouterModule, Menubar],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css'
})
export class HeaderComponent {
	private router = inject(Router);

	public items = signal<MenuItem[]>([
		{
			label: 'Sobre el proyecto',
			icon: 'pi pi-info-circle',
			command: () => this.navigateToSection('about')
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
	]);

	public transparent = input<boolean>(false);

	navigateToSection(fragment: string): void {
		this.router.navigate(['/home'], { fragment });
	}
}
