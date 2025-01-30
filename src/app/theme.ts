import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const customPreset = definePreset(Aura, {
	components: {
		inputtext: {
			border: '2px',
			borderColor: '{gray.300}',
			borderRadius: '3px',
			height: '32px'
		},
		iconfield: {
			iconColor: '{gray.400}'
		},
		datatable: {
			rowColor: '{slate.700}',
			columnTitleFontWeight: '600',
			headerCellColor: '{slate.700}',
			headerCellSelectedColor: '#4caf50'
		},
		tag: {
			fontSize: '.75rem',
			colorScheme: {
				primaryBackground: '#a3b18a',
				primaryColor: '#ffffff'
			}
		},
		tabs: {
			tabPadding: '1rem',
			tabActiveColor: '#059669',
			tabActiveBorderColor: '#059669'
		}
	}
});

export default customPreset;
