import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

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
				<img src="profiles/@${ this.tag }/@${ this.tag } notion.png" />
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

			border: 1px solid rgba(0,0,0,0.25);
			border-radius: 12px;

			cursor: pointer;
		}

		.bloco:hover {
			box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.25);
		}

		.bloco img {
			height: 150px;
			object-fit: cover;
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
		}

		.bloco p {
			margin: 0;
			padding: 0 12px;
			line-height: 40px;
		}`
}

declare global {
	interface HTMLElementTagNameMap {
		'model-block': ModelBlock
	}
}
