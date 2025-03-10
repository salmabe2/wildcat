import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuItem } from 'primeng/api';
import { TabMenu } from 'primeng/tabmenu';

import { PublicationService } from '@wildcat/services';
import { Publication, PublicationType } from '@wildcat/interfaces';
import { PublicationCardComponent } from '../publication-card/publication-card.component';

@Component({
	imports: [CommonModule, TabMenu, PublicationCardComponent],
	templateUrl: './overview-publications.component.html',
	styleUrl: './overview-publications.component.css'
})
export default class OverviewPublicationsComponent implements OnInit {
	private publicationService = inject(PublicationService);

	public tabMenu = signal<MenuItem[]>([
		{ label: 'Todos', id: 'all' },
		{ label: 'Proyecto', id: 'project' },
		{ label: 'Noticias', id: 'news' }
	]);

	public postsData = signal<Publication[]>([]);

	ngOnInit(): void {
		this.postsData.set(this.publicationService.getPublications());
	}

	/**
	 * Filters posts based on the selected tab in the menu.
	 *
	 * @param {MenuItem} $event - The selected menu item for filtering.
	 */
	filterPostsOnTabChange($event: MenuItem): void {
		this.postsData.set(
			$event.id === 'all'
				? this.publicationService.getPublications()
				: this.publicationService.getPublicationsByType(
						$event.id as PublicationType
					)
		);
	}
}
