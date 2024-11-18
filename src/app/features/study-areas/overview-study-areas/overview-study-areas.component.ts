import { StudyAreaService } from './../../../core/services/study-area.service';
import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudyArea } from '@wildcat/interfaces';
import { TableComponent } from '@wildcat/shared/components';
import { TableColumn } from '@wildcat/shared/interfaces';

@Component({
	selector: 'app-overview-study-areas',
	standalone: true,
	templateUrl: './overview-study-areas.component.html',
	styleUrl: './overview-study-areas.component.scss',
	imports: [TableComponent, CommonModule, RouterModule]
})
export class OverviewStudyAreasComponent implements OnInit {
	constructor(private studyAreaService: StudyAreaService) {}

	studyAreas!: StudyArea[];

	tableColumns: TableColumn[] = [
		{ field: 'name', label: 'Nombre', sort: true },
		{ field: 'presence', label: 'Presencia', sort: true },
		{ field: 'num_cats', label: 'Núm. gatos', sort: true },
		{ field: 'region', label: 'Comunidad Autónoma', sort: true },
		{ field: 'link', label: '' }
	];

	ngOnInit(): void {
		this.studyAreas = this.studyAreaService.studyAreas;
	}
}
