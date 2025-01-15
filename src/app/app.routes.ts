import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: '',
		loadComponent: () => import('./layout/layout.component'),
		children: [
			{
				path: 'publications',
				loadComponent: () =>
					import(
						'./features/publications/overview-publications/overview-publications.component'
					)
			},
			{
				path: 'study-areas',
				loadComponent: () =>
					import(
						'./features/study-areas/overview-study-areas/overview-study-areas.component'
					)
			},
			{
				path: 'partners',
				loadComponent: () => import('./features/partners/partners.component')
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];
