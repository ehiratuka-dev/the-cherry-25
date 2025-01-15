import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'

@customElement('base-button')
export class BaseButton extends LitElement {
	@property()
	icon: string | undefined;

	@property()
	text: string | undefined;

	@property({ type: String })
	color: string = 'transparent'; // Valor padrão

	protected handleClick() {
		console.log("Botão clicado");
	}

	render() {
		return html`
			<div class="container-base-button" @click="${this.handleClick}">
				<svg-icon type="mdi" path="${this.icon}"></svg-icon>
				<p>${this.text}</p>
			</div>`;
	}

	updated(changedProperties: Map<string, unknown>) {
		super.updated(changedProperties);
		if (changedProperties.has('color')) {
			this.style.setProperty('--button-color', this.color); // Atualiza a variável CSS
		}
	}

	static styles = css`
		.container-base-button {
			display: flex;
			align-items: center;
		
			padding: var(--espacamento);
			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			cursor: pointer;
			position: relative;
		}
		.container-base-button::before {
		    content: "";
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			width: 100%;
			background-color: var(--button-color, transparent);
			transition: background-color 180ms ease-in-out;
			opacity: 0.2;

			display: flex;
			align-items: center;

			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			pointer-events: none;
		}

		.container-base-button p {
			color: var(--button-color, transparent);
			margin: 0 0 0 var(--espacamento);
		}

		.container-base-button svg-icon {
			color: var(--button-color, transparent)
		}

		`
}
