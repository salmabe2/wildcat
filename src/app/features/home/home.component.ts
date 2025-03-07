import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Publication } from '@wildcat/interfaces';
import { PublicationService } from '@wildcat/services';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { PublicationCardComponent } from '../publications/publication-card/publication-card.component';
@Component({
	imports: [
		CommonModule,
		RouterModule,

		HeaderComponent,
		PublicationCardComponent
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	private route = inject(ActivatedRoute);
	private publicationService = inject(PublicationService);

	public recentPosts = signal<Publication[]>([]);

	ngOnInit(): void {
		/* Scroll to about us info */
		this.route.fragment.subscribe((fragment) => {
			if (fragment) {
				const element = document.querySelector(`#${fragment}`);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});

		this.recentPosts.set(this.publicationService.getRecentPublications(3));
	}
}
