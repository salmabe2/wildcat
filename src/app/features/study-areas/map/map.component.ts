import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import { StudyAreaService } from '@wildcat/services';

import * as L from 'leaflet';

L.Icon.Default.mergeOptions({
	iconUrl: 'assets/markers/marker-icon.png',
	iconRetinaUrl: 'assets/markers/marker-icon-2x.png',
	shadowUrl: 'assets/markers/marker-shadow.png',
});

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

		L.tileLayer(
			'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
			{
				attribution: '© OpenStreetMap contributors',
			},
		).addTo(this.map);

		const locations = this.studyAreaService.studyAreas;

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
