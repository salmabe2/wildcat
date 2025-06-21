import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { StudyAreaService } from '@wildcat/services';

import * as L from 'leaflet';

@Component({
	selector: 'app-map',
	imports: [CommonModule],
	templateUrl: './map.component.html',
	styleUrl: './map.component.css',
})
export default class MapComponent implements AfterViewInit {
	private studyAreaService = inject(StudyAreaService);

	map!: L.Map;
	ngAfterViewInit() {
		this.map = L.map('map').setView([40.4168, -3.7038], 6); // Center on Spain

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors',
		}).addTo(this.map);

		// TODO: wait for coords data
    // const locations = this.studyAreaService.studyAreas;

		const locations = [
			{
				leader: 'Loreto García Román',
				coords: [40.4168, -3.7038],
				name: 'Parque Regional del Sureste',
				year: '2024',
				months: 'Abril-junio',
				otherName: '',
				province: 'Madrid',
				region: 'Madrid',
				presence: false,
				partners: [
					'Loreto García Román',
					'Felipe Peñalosa García',
					'Félix Martínez Olivas',
					'Jorge Calero Ramírez',
				],
				leaderEmail: 'lorejaruco@gmail.com',
				photos: '',
			},
		];

		locations.forEach((loc) => {
			L.marker(loc.coords as [number, number]).addTo(this.map).bindPopup(`
          <h3>${loc.name}</h3>
          <p><strong>Presencia:</strong> ${loc.presence ? 'Sí' : 'No'}</p>
          <p><strong>Año:</strong> ${loc.year} </p>
          <p><strong>Colaboradores:</strong> ${loc.partners.join(', ')}</p>
          <p><strong>Contacto:</strong> <a href="mailto:${loc.leaderEmail}">${loc.leaderEmail}</a></p>          `);
		});
	}
}
