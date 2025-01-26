import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { BaseButton, COLORS } from './_base-button'

@customElement('select-button')
export class SelectButton extends BaseButton {
	@property()
	selected = false

	restoreColor: COLORS | undefined

	public connectedCallback(): void {
		super.connectedCallback()
		this.style.setProperty('--button-spacing', '0.2rem 1rem')
		this.style.setProperty('--button-text-size', '0.75rem')
	}

	protected handleClick(): void {
		if (!this.selected) this.restoreColor = this.color
		this.selected = !this.selected
	}

	protected updated(changedProperties: Map<string, string>): void {
		super.updated(changedProperties)
		if (changedProperties.has('selected')) {
			if (this.selected) {
				this.color = COLORS.BLUE
			} else {
				this.color = this.restoreColor ?? COLORS.DEFAULT
			}
		}
	}
}
