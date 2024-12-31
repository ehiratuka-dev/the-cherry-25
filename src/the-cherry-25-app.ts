import { Router } from '@lit-labs/router';
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './pages/models-page';
import './pages/model-page';

@customElement('the-cherry-25-app')
export class TheCherry25App extends LitElement {

	private router = new Router(this, [
		{ path: '/model/:id', render: ({ id }) => html`<model-page id=${ id }></model-page>` },
		{ path: '/models', render: () => html`<models-page></models-page>`},
		{ path: '/', render: () => html`<models-page></models-page>` }
	]);

	render() {
		return html`
			<div class="container">
				${ this.router.outlet() }
			</div>`
	}

	static styles = css`
		.container {
			max-width: 1080px;
			min-height: 100vh;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;

			background-color: var(--container-color);
		}
			
		.container * {
			width: 100%;
		}`
}

declare global {
	interface HTMLElementTagNameMap {
		'the-cherry-25-app': TheCherry25App
	}
}
