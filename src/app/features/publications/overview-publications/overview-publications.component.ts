import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PublicationService } from '@wildcat/services';
import { Publication, PublicationType } from '@wildcat/interfaces';

@Component({
	selector: 'app-overview-publications',
	standalone: true,
	imports: [CommonModule, CardModule, TabMenuModule, ButtonModule],
	templateUrl: './overview-publications.component.html',
	styleUrl: './overview-publications.component.scss'
})
export class OverviewPublicationsComponent implements OnInit {
	constructor(private publicationService: PublicationService) {}

	tabMenuModel: MenuItem[] = [
		{ label: 'Todos', id: 'all' },
		{ label: 'Proyecto', id: 'project' },
		// { label: 'Científicas', id: 'science' },
		{ label: 'Noticias', id: 'news' }
	];

	postsData!: Publication[];

	ngOnInit(): void {
		this.postsData = this.publicationService.publicationsData;
	}

	filterPostsOnTabChange($event: MenuItem) {
		this.postsData =
			$event.id === 'all'
				? this.postsData
				: this.publicationService.getPublicationsByType(
						$event.id as PublicationType
					);
	}
}
