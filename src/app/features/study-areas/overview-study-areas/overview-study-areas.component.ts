import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableComponent } from "../../../shared/components/table/table.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-overview-study-areas',
    standalone: true,
    templateUrl: './overview-study-areas.component.html',
    styleUrl: './overview-study-areas.component.scss',
    imports: [TableModule, TableComponent, CommonModule, RouterModule]
})
export class OverviewStudyAreasComponent {

  studyAreas = [
    { id: 1, name: 'Madrid', cats_num: '10'},
    { id: 2,  name: 'Guadarrama', cats_num: '10'},
    { id: 11, name: 'Illescas', cats_num: '10'},
    { id: 213, name: 'Sierra del Cura', cats_num: '10'},
    { id: 211, name: 'Madrid', cats_num: '10'},
    { id: 3, name: 'Madrid', cats_num: '10'},
    { id: 41, name: 'Madrid', cats_num: '10'},
    { id: 15, name: 'Madrid', cats_num: '10'},
  ]

  tableColumns = [
    { field: 'name', label: 'Nombre'},
    { field: 'num_cats', label: 'Núm. gatos'},
    { field: 'detail', label: ''}
  ]

}
