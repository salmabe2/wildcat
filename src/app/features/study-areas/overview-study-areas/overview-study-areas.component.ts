import { Component, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudyAreaService } from '@wildcat/services';
import { StudyArea } from '@wildcat/interfaces';
import { TableComponent } from '@wildcat/shared/components';
import { TableColumn } from '@wildcat/shared/interfaces';

@Component({
	templateUrl: './overview-study-areas.component.html',
	styleUrl: './overview-study-areas.component.css',
	imports: [TableComponent, CommonModule, RouterModule]
})
export default class OverviewStudyAreasComponent implements OnInit {
  private studyAreaService = inject(StudyAreaService);

	public studyAreas = signal<StudyArea[]>([]);

	public tableColumns = signal<TableColumn[]>([
		{ field: 'name', label: 'Nombre', sort: true },
		{ field: 'presence', label: 'Presencia', sort: true },
		{ field: 'num_cats', label: 'Núm. gatos', sort: true },
		{ field: 'region', label: 'Comunidad Autónoma', sort: true },
		{ field: 'link', label: '' }
	]);

	ngOnInit(): void {
		this.studyAreas.set(this.studyAreaService.studyAreas);
	}
}
