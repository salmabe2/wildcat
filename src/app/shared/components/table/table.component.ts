import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, input } from '@angular/core';

import { TableModule } from 'primeng/table';

import { TableColumn } from '@wildcat/shared/interfaces';

@Component({
	selector: 'ui-table',
	imports: [TableModule, CommonModule],
	templateUrl: './table.component.html',
	styleUrl: './table.component.scss'
})
export class TableComponent {
	public tableColumns = input<TableColumn[]>([]);
  public items = input([{}]);

  // ngTemplateOutlet does not work with SignalInput
	@Input() public rowTemplate!: TemplateRef<any>;
}
