import { Component, computed, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type ButtonSizes = 'small' | 'medium' | 'large';
type ButtonColors = 'forest' | 'forest-1' | 'forest-2';

@Component({
	selector: 'ui-button',
	imports: [ButtonModule],
	templateUrl: './button.component.html',
	styleUrl: './button.component.css',
})
export class ButtonComponent {
	public size = input<ButtonSizes>('medium');
	public color = input<ButtonColors>('forest');
	public styleClassInput = input<string>('', { alias: 'styleClass' });

	public styleClass = computed(
		() =>
			`button--${this.size()} button--${this.color()} ${this.styleClassInput()}`,
	);
}
