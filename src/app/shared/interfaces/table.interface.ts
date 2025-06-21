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
