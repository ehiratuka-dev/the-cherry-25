import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { montarBanner } from '../utils/mount-url';

@customElement('model-block')
export class ModelBlock extends LitElement {
	@property()
	tag: string = '';

	private _onClick() {
		window.location.href = `model/${ this.tag }`
	}

	render() {
		return html`
			<div class="bloco" @click=${this._onClick}>
				${ montarBanner(this.tag) }
				<p>@${ this.tag }</p>
			</div>`
	}

	static styles = css`
		.bloco {
			width: 253px;
			height: 190px;

			display: flex;
			flex-direction: column;

			transition: box-shadow 0.3s ease;
			box-shadow: none;

			border-radius: var(--raio-de-borda);

			cursor: pointer;
		}

		.bloco img {
			height: 150px;
			object-fit: cover;
			border-top-left-radius: var(--raio-de-borda);
			border-top-right-radius: var(--raio-de-borda);
		}

		.bloco p {
			margin: 0;
			padding: 0 var(--espacamento);
			line-height: 40px;

			background-color: var(--primary-color);
			color: var(--primary-text-color);

			border-bottom-left-radius: var(--raio-de-borda);
			border-bottom-right-radius: var(--raio-de-borda);
		}`
}

declare global {
	interface HTMLElementTagNameMap {
		'model-block': ModelBlock
	}
}
