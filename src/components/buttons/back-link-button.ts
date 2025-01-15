import { customElement, property } from 'lit/decorators.js'

import { router } from '../../utils/Router';

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'
import { BaseButton } from './base-button';
import { css } from 'lit';

@customElement('back-link-button')
export class BackLinkButton extends BaseButton {
	@property()
	top: string = '';

	@property()
	left: string = '';

	constructor() {
		super();
		this.icon = mdiArrowLeftBold;
		this.text = 'Voltar';
		this.color = 'var(--bs-green)'
	}

	static styles = [
		super.styles, // Reutiliza os estilos do BaseButton
		css`
			:host {
		  		position: absolute;
				left: var(--espacamento);
				top: var(--espacamento);
			}
		`,
	  ];

	handleClick() {
		router.navigate('/models');
	}
}
