import { customElement, property } from 'lit/decorators.js'

import { router } from '../../utils/Router'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'
import { BaseButton, COLORS } from './base-button'

@customElement('back-link-button')
export class BackLinkButton extends BaseButton {
	@property()
	top: string = ''

	@property()
	left: string = ''

	constructor() {
		super()
		this.icon = mdiArrowLeftBold
		this.text = 'Voltar'
		this.color = COLORS.GREEN
	}

	handleClick() {
		router.navigate('/models')
	}
}
