import { definePreset } from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const customPreset = definePreset(Nora, {
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
				primaryBackground: '#a3b18a'
			}
		}
	}
});

export default customPreset;
