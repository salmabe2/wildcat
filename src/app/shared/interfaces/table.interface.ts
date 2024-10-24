import { Partner } from '@wildcat/interfaces';

/**
 *  Interface representing the configuration of a single column in a table.
 */
export interface TableColumn {
	field?: string;
	label?: string;
	filterOptions?: object;
	sort?: boolean;
	class?: string;
	maxLength?: number; // Max length for strings to truncate
}

/**
 *  Defines all possible types that the table component can receive as data.
 */
export type TableItems = Partner[];
