import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('numbered-star-header')
export class NumberedStartHeader extends LitElement {
	@property()
	stars: number = 0;

	render() {
		return html`
			<div class="star">${this.stars}</div>`;
	}

	static styles = css`
		.star {
			position: absolute;
			right: var(--espacamento);
			top: var(--espacamento);
			display: inline-flex;
			align-items: center;
			justify-content: center;

			min-width: var(--header-min-response-width);
			width: 20%;
			aspect-ratio: 1 / 1;

			background: gold;
			clip-path: polygon(
				50% 0%,
				61% 35%,
				98% 35%,
				68% 57%,
				79% 91%,
				50% 70%,
				21% 91%,
				32% 57%,
				2% 35%,
				39% 35%
			);
			font-size: var(--tamanho-do-subtitulo);
			font-weight: bold;
			color: white;
			text-shadow: var(--box-shadow);
		}`
}
