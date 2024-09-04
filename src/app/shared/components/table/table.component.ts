import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableColumn } from '../../interfaces/table.interface';

@Component({
  selector: 'ui-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() tableColumns: TableColumn[] = [];
  @Input() items = [{}];
}