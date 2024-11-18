import { Injectable } from '@angular/core';
import { StudyArea } from '@wildcat/interfaces';

@Injectable({
	providedIn: 'root'
})
export class StudyAreaService {
	regions: String[] = [
		'Aragón',
		'Castilla La Mancha',
		'Castilla y León',
		'Extremadura',
		'Región de Murcia'
	];

	studyAreas: StudyArea[] = [
		{
			id: 397,
			name: 'Murcia',
			presence: true,
			num_cats: 3,
			region: 'Región de Murcia',
			link: 'https://docs.google.com/document/d/16IT61Ih63sS_AtLLxHoL6fYF2O2KCx7o/edit?usp=drive_link&ouid=115988741321464704916&rtpof=true&sd=true'
		},
		{
			id: 409,
			name: 'Nerpio',
			presence: false,
			num_cats: 0,
			region: 'Castilla La Mancha',
			link: 'https://docs.google.com/document/d/1wOFej3hsDqcrOHROEEPQimJFZNt3Xziu/edit?usp=drive_link&ouid=115988741321464704916&rtpof=true&sd=true'
		},
		{
			id: 996,
			name: 'Zarza-Capilla',
			presence: false,
			num_cats: 0,
			region: 'Extremadura',
			link: 'https://docs.google.com/document/d/1hwMlhWoX76bgUbV9ZT0yK3KTVh1SAk1v/edit?usp=drive_link&ouid=115988741321464704916&rtpof=true&sd=true'
		},
		{
			id: 1006,
			name: 'Monegros',
			presence: true,
			num_cats: 3,
			region: 'Aragón',
			link: 'https://docs.google.com/document/d/1_xXZcdUPrNqvC5NentI3J6nHAKfrTeUe/edit?usp=drive_link&ouid=115988741321464704916&rtpof=true&sd=true'
		},
		{
			id: 1037,
			name: 'Valdegeña',
			presence: true,
			num_cats: 1,
			region: 'Castilla y León',
			link: 'https://docs.google.com/document/d/1HSsLKIbxy1_vX5R5Op8VeG1PprjBe_Vs/edit?usp=drive_link&ouid=115988741321464704916&rtpof=true&sd=true'
		}
	];
}
