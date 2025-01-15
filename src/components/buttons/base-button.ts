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
			<div class="category-filter" @click="${this.handleClick}">
				<svg-icon type="mdi" path="${this.icon}" style="color: var(--primary-color)"></svg-icon>
				<p>${this.text}</p>
			</div>`;
	}

	static styles = css`
		:host {
			display: flex;
			align-items: center;
		
			padding: var(--espacamento);
			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			cursor: pointer;
		}

		.category-filter p {
			margin: 0 0 0 var(--espacamento);
		}`
}
