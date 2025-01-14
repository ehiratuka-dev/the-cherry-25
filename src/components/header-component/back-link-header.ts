import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'

@customElement('back-link-header')
export class BackLinkHeader extends LitElement {
	@property()
	stars: number = 0;

	backLinkClik() {
		window.location.href = `/#models`
	}

	render() {
		return html`
			<div class="back-link" @click="${this.backLinkClik}">
				<svg-icon type="mdi" path="${mdiArrowLeftBold}" style="color: var(--primary-color)"></svg-icon>
				<p>Voltar</p>
			</div>`;
	}

	static styles = css`
		.back-link {
			display: flex;
			align-items: center;

			position: absolute;
			cursor: pointer;
			top: var(--espacamento);
			left: var(--espacamento);

			background-color: var(--container-color);
			padding: var(--espacamento);
			border-radius: var(--borda-arredondada);
			color: var(--primary-text-color);

			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);
		}
			
		.back-link:hover {
			box-shadow: var(--box-shadow-hover);
		}

		.back-link p {
			margin: 0 0 0 var(--espacamento);
		}`
}
