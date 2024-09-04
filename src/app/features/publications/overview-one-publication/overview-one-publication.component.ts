import { Component } from '@angular/core';
import { HtmlLoaderService } from '../services/html-loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-one-publication',
  standalone: true,
  imports: [],
  templateUrl: './overview-one-publication.component.html',
  styleUrl: './overview-one-publication.component.scss'
})
export class OverviewOnePublicationComponent {
  htmlContent: string = '';

  constructor(
    private htmlLoaderService: HtmlLoaderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const publicationId: string | null = params.get('id');
      if (publicationId) {
        this.loadHtmlContent(publicationId);
      }
    });
  }

  loadHtmlContent(templateName: string) {
    this.htmlLoaderService.loadHtml(templateName).subscribe({
      next: (html) => {
        this.htmlContent = html;
      },
      error: (err) => {
        console.error('Error loading HTML:', err);
      }
    });
  }
}
