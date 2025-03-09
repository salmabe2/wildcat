import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

import { Partner } from '@wildcat/interfaces';
import { PartnerService } from '@wildcat/services';
import { TableColumn } from '@wildcat/shared/interfaces';
import { TableComponent } from '@wildcat/shared/components';

@Component({
	imports: [
		CommonModule,
		CardModule,
		FormsModule,
		IconField,
		InputIcon,
		InputTextModule,
		TableComponent,
		TagModule
	],
	templateUrl: './partners.component.html',
	styleUrl: './partners.component.css'
})
export default class PartnersComponent implements OnInit {
  private partnerService = inject(PartnerService);

  //TODO: Change logic, waiting on new data
	public searchText = signal<string>('');

	public tableColumns = signal<TableColumn[]>([
		{ field: 'name', label: 'Nombre' },
		{ field: 'block', label: 'Bloque', class: 'w-1/2' }
	]);
	public partnersData = signal<Partner[]>([]);

  //TODO: Move to component (searchInput)
	debouncerEffect = effect((onCleanup) => {
		const term = this.searchText();
		const timeout = setTimeout(() => {
			this.searchBlocks(term);
		}, 500);

		onCleanup(() => {
			clearTimeout(timeout);
		});
	});

	ngOnInit(): void {
		this.partnersData.set(this.partnerService.partnersData);
	}

	searchBlocks(term: string): void {
		const searchText = term.toLowerCase();
		if (searchText) {
			this.partnersData.set(
				this.partnerService.partnersData.filter((partner) => {
					return (
						partner.blocks.toLowerCase().includes(searchText) ||
						partner.name.toLowerCase().includes(searchText)
					);
				})
			);
		} else {
			this.partnersData.set(this.partnerService.partnersData);
		}
	}
}
