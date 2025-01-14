import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'

@customElement('back-link-button')
export class BackLinkButton extends LitElement {
	@property()
	top: string = '';
	
	@property()
	left: string = '';

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

	updated(changedProperties: Map<string, string>) {
	  if (changedProperties.has('top')) {
		this.style.setProperty('--top', this.top);
	  }
	  if (changedProperties.has('left')) {
		this.style.setProperty('--left', this.left);
	  }
	}

	static styles = css`
		.back-link {
			display: flex;
			align-items: center;
			top: var(--top, var(--espacamento));
			left: var(--left, var(--espacamento));

			position: absolute;
			cursor: pointer;

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
