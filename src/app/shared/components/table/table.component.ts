import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { TableColumn } from '../../interfaces/table.interface';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@Component({
	selector: 'ui-table',
	standalone: true,
	imports: [TableModule, CommonModule, IconFieldModule, InputIconModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss'
})
export class TableComponent {
	@Input() tableColumns: TableColumn[] = [];
	@Input() items = [{}];
	@Input() rowTemplate!: TemplateRef<any>;

	@ViewChild('pTable') pTable!: Table;
}
