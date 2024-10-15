import { StudyAreaItemComponent } from './features/study-areas/study-area-item/study-area-item.component';
import { HomeComponent } from './features/home/home.component';
import { Routes } from '@angular/router';
import { OverviewPublicationsComponent } from './features/publications/overview-publications/overview-publications.component';
import { OverviewStudyAreasComponent } from './features/study-areas/overview-study-areas/overview-study-areas.component';
import { LayoutComponent } from './layout/layout.component';
import { PartnersComponent } from './features/partners/partners.component';
import { OverviewOnePublicationComponent } from './features/publications/overview-one-publication/overview-one-publication.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'publications', component: OverviewPublicationsComponent },
      { path: 'publications/:id', component: OverviewOnePublicationComponent },
      { path: 'study-areas', component: OverviewStudyAreasComponent },
      { path: 'study-areas/:id', component: StudyAreaItemComponent },
      { path: 'partners', component: PartnersComponent }
    ]
  }
];
