import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const customPreset = definePreset(Aura, {
	components: {
		inputtext: {
			border: '2px',
			borderColor: '{gray.300}',
			borderRadius: '3px',
			height: '32px',
		},
		iconfield: {
			iconColor: '{gray.400}',
		},
		datatable: {
			rowColor: '{slate.700}',
			columnTitleFontWeight: '600',
			headerCellColor: '{slate.700}',
			headerCellSelectedColor: '#4caf50',
		},
		tag: {
			fontSize: '.75rem',
			colorScheme: {
				primaryBackground: '#a3b18a',
				primaryColor: '#ffffff',
			},
		},
		tabs: {
			tabPadding: '1rem',
			tabActiveColor: '#059669',
			tabActiveBorderColor: '#059669',
		},
		menubar: {
			itemFocusBackground: 'var(--color-forest-1)',
			itemIconColor: 'var(--color-light)',
			itemIconFocusColor: 'var(--color-light)',
		},
		card: {
			titleFontSize: '1.125rem',
			titleFontWeight: '700',
			shadow: '0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f',
		},
	},
});

export default customPreset;
