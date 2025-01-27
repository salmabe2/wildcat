import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PublicationService } from '@wildcat/services';
import { Publication } from '@wildcat/interfaces';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-home',
    imports: [GalleriaModule, HeaderComponent, CardModule, TagModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	public recentPosts!: Publication[];

	constructor(
		private route: ActivatedRoute,
		private publicationService: PublicationService
	) {}

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

		this.recentPosts = this.publicationService.getRecentPublications(3);
	}
}
