import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { OverviewPublicationsComponent } from './features/publications/overview-publications/overview-publications.component';
import { OverviewStudyAreasComponent } from './features/study-areas/overview-study-areas/overview-study-areas.component';
import { PartnersComponent } from './features/partners/partners.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'publications', component: OverviewPublicationsComponent },
			{ path: 'study-areas', component: OverviewStudyAreasComponent },
			{ path: 'partners', component: PartnersComponent }
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];
