import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';

import { Table, TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { TableColumn } from '../../interfaces/table.interface';


@Component({
	selector: 'ui-table',
	standalone: true,
	imports: [TableModule, CommonModule, IconFieldModule, InputIconModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss'
})
export class TableComponent {
	@Input() public tableColumns: TableColumn[] = [];
	@Input() public items = [{}];
	@Input() public rowTemplate!: TemplateRef<any>;

	@ViewChild('pTable') public pTable!: Table;
}
