import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'


@customElement('not-found-page')
export class NotFoundPage extends LitElement {

	constructor() {
		super();
	}

	async connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<div class="flex-container">
				<p>Página Não Encontrada</p>
				<back-link-button .left="${ '0px' }"></back-link-button>
			</div>`
	}

	static styles = css`
		.flex-container {
			height: 100vh;

			display: flex;
			justify-content: center;
			align-items: center;

			position: relative;
		}

		.flex-container p {
			display: block;
			margin: 0px;
			text-align: center;
			font-size: var(--tamanho-do-titulo);
		}
	`
}
