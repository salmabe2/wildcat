import { StudyAreaItemComponent } from './features/study-areas/study-area-item/study-area-item.component';
import { HomeComponent } from './features/home/home.component';
import { Routes } from '@angular/router';
import { PublicationsComponent } from './features/publications/publications/publications.component';
import { OverviewStudyAreasComponent } from './features/study-areas/overview-study-areas/overview-study-areas.component';
import { LayoutComponent } from './layout/layout.component';
import { BlocksComponent } from './features/blocks/blocks.component';

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
      { path: 'publications', component: PublicationsComponent },
      { path: 'study-areas', component: OverviewStudyAreasComponent },
      { path: 'study-areas/:id', component: StudyAreaItemComponent },
      { path: 'blocks', component: BlocksComponent }
    ]
  }
];
