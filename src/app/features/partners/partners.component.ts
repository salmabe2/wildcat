import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, Subscription } from 'rxjs';

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
	standalone: true,
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
	styleUrl: './partners.component.scss'
})
export default class PartnersComponent implements OnInit, OnDestroy {
	private debouncer: Subject<string> = new Subject<string>();
	private debouncerSubscription?: Subscription;

	public tableColumns: TableColumn[] = [
		{ field: 'name', label: 'Nombre' },
		{ field: 'block', label: 'Bloque', class: 'w-1/2' }
	];
	public partnersData!: Partner[];

	constructor(private partnerService: PartnerService) {}

	ngOnInit(): void {
		this.partnersData = this.partnerService.partnersData;
		this.setDebouncerSubscription();
	}

	ngOnDestroy(): void {
		this.debouncerSubscription?.unsubscribe();
	}

	onSearch(term: string): void {
		this.debouncer.next(term);
	}

	setDebouncerSubscription(): void {
		this.debouncerSubscription = this.debouncer
			.pipe(debounceTime(300))
			.subscribe((term) => {
				this.searchBlocks(term);
			});
	}

	searchBlocks(term: string): void {
		const searchText = term.toLowerCase();
		if (searchText) {
			this.partnersData = this.partnerService.partnersData.filter((partner) => {
				return (
					partner.blocks.toLowerCase().includes(searchText) ||
					partner.name.toLowerCase().includes(searchText)
				);
			});
		} else {
			this.partnersData = this.partnerService.partnersData;
		}
	}
}
