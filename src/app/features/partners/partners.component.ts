import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';

import { TableComponent } from '@wildcat/shared/components';
import { TableColumn } from '@wildcat/shared/interfaces';
import { Partner } from '@wildcat/interfaces';
import { PartnerService } from '@wildcat/services';

@Component({
	selector: 'app-blocks',
	standalone: true,
	imports: [
		CommonModule,
		CardModule,
		InputTextModule,
		FormsModule,
		IconFieldModule,
		InputIconModule,
		TagModule,
		TableComponent
	],
	templateUrl: './partners.component.html',
	styleUrl: './partners.component.scss'
})
export class PartnersComponent implements OnInit {
	constructor(private partnerService: PartnerService) {}

	tableColumns: TableColumn[] = [
		{ field: 'name', label: 'Nombre' },
		{ field: 'block', label: 'Bloque', class: 'w-1/2' }
	];

	filteredPartnersData!: Partner[]; // TODO: fix this

	searchInputText: string = '';
	searchTimeout: any;

	ngOnInit(): void {
		this.filteredPartnersData = this.partnerService.partnersData;
	}

	onSearch() {
		window.clearTimeout(this.searchTimeout);
		this.searchTimeout = window.setTimeout(() => this.searchBlocks(), 400);
	}

	searchBlocks() {
		const searchText = this.searchInputText.toLowerCase();
		if (this.searchInputText) {
			this.filteredPartnersData = this.partnerService.partnersData.filter(
				(partner) => {
					return (
						partner.blocks.toLowerCase().includes(searchText) ||
						partner.name.toLowerCase().includes(searchText)
					);
				}
			);
		} else {
			this.filteredPartnersData = this.partnerService.partnersData;
		}
	}
}
