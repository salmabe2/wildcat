import { Injectable } from '@angular/core';
import { StudyArea } from '@wildcat/interfaces';

@Injectable({
	providedIn: 'root'
})
export class StudyAreaService {
  // TODO: this is test data, waiting on real data
	studyAreas: StudyArea[] = [
		{
			id: 1,
			name: 'Madrid',
			presence: 10,
			absence: 20,
			region: 'Comunidad de Madrid',
			coords: '23 45'
		}
	];
}
