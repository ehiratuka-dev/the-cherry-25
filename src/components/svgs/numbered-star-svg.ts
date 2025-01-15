import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('numbered-star-svg')
export class NumberedStartSVG extends LitElement {
	@property()
	stars: number = 0;

	render() {
		return html`
			<div class="star">${this.stars}</div>`;
	}

	static styles = css`
		.star {
			position: absolute;
			top: var(--espacamento);
			right: var(--espacamento);

			display: inline-flex;
			align-items: center;
			justify-content: center;

			width: var(--header-response-width);
			min-width: var(--header-min-response-width);
			aspect-ratio: 1 / 1;

			background: var(--bs-yellow);
			color: var(--bs-white);
			font-size: var(--tamanho-do-subtitulo);
			font-weight: var(--peso-do-subtitulo);
			text-shadow: var(--box-shadow);

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
		}`
}
