import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'

@customElement('base-button')
export class BaseButton extends LitElement {
	@property()
	icon: string | undefined;

	@property()
	text: string | undefined;

	protected handleClick() {
		console.log("Botão clicado");
	}

	render() {
		return html`
			<div class="container-base-button" @click="${this.handleClick}">
				<svg-icon type="mdi" path="${this.icon}" style="color: var(--primary-color)"></svg-icon>
				<p>${this.text}</p>
			</div>`;
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
		}

		.container-base-button p {
			margin: 0 0 0 var(--espacamento);
		}`
}
