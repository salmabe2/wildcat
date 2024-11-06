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
	standalone: true,
	imports: [GalleriaModule, HeaderComponent, CardModule, TagModule, RouterModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	responsiveOptions: any[] = [
		{
			breakpoint: '1024px',
			numVisible: 5
		},
		{
			breakpoint: '768px',
			numVisible: 3
		},
		{
			breakpoint: '560px',
			numVisible: 1
		}
	];

	images: Object[] = [
		{
			itemImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
			thumbnailImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
			alt: 'Description for Image 1',
			title: 'Title 1'
		},
		{
			itemImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
			thumbnailImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
			alt: 'Description for Image 2',
			title: 'Title 2'
		},
		{
			itemImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
			thumbnailImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
			alt: 'Description for Image 3',
			title: 'Title 3'
		},
		{
			itemImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
			thumbnailImageSrc:
				'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
			alt: 'Description for Image 4',
			title: 'Title 4'
		}
	];

	showIndicatorsOnItem: boolean = false;
	recentPosts!: Publication[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
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
