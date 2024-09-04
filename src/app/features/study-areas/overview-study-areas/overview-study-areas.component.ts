import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudyArea } from '@wildcat/interfaces';
import { TableComponent} from "@wildcat/shared/components"
import { TableColumn } from '@wildcat/shared/interfaces';

@Component({
  selector: 'app-overview-study-areas',
  standalone: true,
  templateUrl: './overview-study-areas.component.html',
  styleUrl: './overview-study-areas.component.scss',
  imports: [TableComponent, CommonModule, RouterModule]
})
export class OverviewStudyAreasComponent {
  // TODO: Get data from external file
  studyAreas: StudyArea[] = [
    { id: 1, name: 'Madrid', presence: 10, absence: 20, region: 'Comunidad de Madrid', coords: '23 45' }
  ];

  tableColumns: TableColumn[] = [
    { field: 'name', label: 'Nombre' },
    { field: 'presence', label: 'Presencia' },
    { field: 'absence', label: 'Ausencia' },
    { field: 'region', label: 'Comunidad Autónoma' },
    { field: 'coords', label: 'Coordenadas' },
    { field: 'link', label: '' }
  ];
}
