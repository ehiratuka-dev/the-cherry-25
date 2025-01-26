import { customElement, property } from 'lit/decorators.js'

import { router } from '../../utils/Router'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'
import { BaseButton, COLORS } from './_base-button'
import { css } from 'lit'

@customElement('back-link-button')
export class BackLinkButton extends BaseButton {
	@property()
	top: string = 'var(--espacamento)'

	@property()
	left: string = 'var(--espacamento)'

	constructor() {
		super('Voltar', mdiArrowLeftBold, COLORS.GREEN)
	}

	updated(changedProperties: Map<string, unknown>) {
		super.updated(changedProperties)
		if (changedProperties.has('top')) {
			this.style.setProperty(
				'--button-relative-top-position',
				`${this.top}`
			)
		}
		if (changedProperties.has('left')) {
			this.style.setProperty(
				'--button-relative-left-position',
				`${this.left}`
			)
		}
	}

	handleClick() {
		router.navigate('/profiles')
	}

	static styles = css`
		${super.styles}

		.container-base-button {
			position: absolute;
			top: var(--button-relative-top-position);
			left: var(--button-relative-left-position);
		}
	`
}
