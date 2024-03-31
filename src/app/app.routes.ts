import { StudyAreaItemComponent } from './features/study-areas/study-area-item/study-area-item.component';
import { HomeComponent } from './features/home/home.component';
import { Routes } from '@angular/router';
import { PublicationsComponent } from './features/publications/publications/publications.component';
import { OverviewStudyAreasComponent } from './features/study-areas/overview-study-areas/overview-study-areas.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'study-areas', component: OverviewStudyAreasComponent },
  { path: 'study-areas/:id', component: StudyAreaItemComponent },
];
