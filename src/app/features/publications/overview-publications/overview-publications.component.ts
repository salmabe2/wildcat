import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';

import { PublicationService } from '@wildcat/services';
import { Publication, PublicationType } from '@wildcat/interfaces';

@Component({
    imports: [CommonModule, ButtonModule, CardModule, TabMenuModule, TagModule],
    templateUrl: './overview-publications.component.html',
    styleUrl: './overview-publications.component.scss'
})
export default class OverviewPublicationsComponent implements OnInit {
	public tabMenuModel: MenuItem[] = [
		{ label: 'Todos', id: 'all' },
		{ label: 'Proyecto', id: 'project' },
		// { label: 'Científicas', id: 'science' },
		{ label: 'Noticias', id: 'news' }
	];

	public postsData!: Publication[];

	constructor(private publicationService: PublicationService) {}

	ngOnInit(): void {
		this.postsData = this.publicationService.getPublications();
	}

	/**
	 * Filters posts based on the selected tab in the menu.
	 *
	 * @param {MenuItem} $event - The selected menu item for filtering.
	 */
	filterPostsOnTabChange($event: MenuItem): void {
		this.postsData =
			$event.id === 'all'
				? this.publicationService.getPublications()
				: this.publicationService.getPublicationsByType(
						$event.id as PublicationType
					);
	}
}
