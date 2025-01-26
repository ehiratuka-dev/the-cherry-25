import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { BaseButton, COLORS } from './base-button'
import { Category } from '../../types/category'

@customElement('select-button')
export class SelectButton extends BaseButton {
	@property()
	selected = false

	restoreColor: COLORS | undefined

	constructor(category: Category | undefined) {
		super(category?.name, category?.icon, category?.color)
		this.style.setProperty('--button-spacing', '0.2rem 1rem')
		this.style.setProperty('--button-text-size', '0.75rem')
	}

	handleClick() {
		if (!this.selected) this.restoreColor = this.color
		this.selected = !this.selected
	}

	updated(changedProperties: Map<string, string>) {
		super.updated(changedProperties)
		if (changedProperties.has('selected')) {
			if (this.selected) this.color = COLORS.BLUE
			else this.color = this.restoreColor ?? COLORS.BLUE
		}
	}
}
