import { customElement, property } from 'lit/decorators.js'

import { router } from '../../utils/Router'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'
import { BaseButton, COLORS } from './base-button'
import { css } from 'lit'

@customElement('back-link-button')
export class BackLinkButton extends BaseButton {
	@property()
	top: string = ''

	@property()
	left: string = ''

	constructor() {
		super('Voltar', mdiArrowLeftBold, COLORS.GREEN)
	}

	handleClick() {
		router.navigate('/profiles')
	}

	static styles = css`
		.container-base-button {
			display: flex;
			align-items: center;

			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			cursor: pointer;
			position: absolute;
			top: var(--espacamento);
			left: var(--espacamento);

			background-color: var(--button-bg-color);
			color: var(--button-text-color);
			padding: var(--button-spacing);
			font-size: var(--button-text-size);
		}

		.container-base-button p {
			margin: 0 0 0 var(--espacamento);
		}
	`
}
