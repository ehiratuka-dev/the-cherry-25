import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { BaseButton, COLORS } from './base-button';

@customElement('select-button')
export class SelectButton extends BaseButton {
	@property()
	selected = false;

	restoreColor: COLORS | undefined;

	constructor() {
		super();
		this.style.setProperty('--button-spacing', '0.2rem');
	}

	handleClick() {
		if(!this.selected) this.restoreColor = this.color;
		this.selected = !this.selected;
	}
	
	updated(changedProperties: Map<string, string>) {
		super.updated(changedProperties);
		if (changedProperties.has('selected')) {
			if (this.selected)
				this.color = COLORS.BLUE
			else
				this.color = this.restoreColor ?? COLORS.BLUE;
		}
	}
}
