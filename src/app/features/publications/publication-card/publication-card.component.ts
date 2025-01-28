import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

import { Publication } from '@wildcat/interfaces';
@Component({
	selector: 'app-publication-card',
	standalone: true,
	imports: [CommonModule, Tag, Card],
	templateUrl: './publication-card.component.html',
	styleUrl: './publication-card.component.scss'
})
export class PublicationCardComponent {
	public post = input.required<Publication>();
}
