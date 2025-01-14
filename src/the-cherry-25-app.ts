import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { router } from './utils/Router';

import './pages/model-page'
import './pages/models-page'
import './pages/not-found-page'

@customElement('the-cherry-25-app')
export class TheCherry25App extends LitElement {
	@state()
	private routerOutlet = html`<models-page></models-page>`;

	constructor() {
		super();
		router
			.on('/', () => this.routerOutlet = html`<models-page></models-page>`)
			.on('/models', () => this.routerOutlet = html`<models-page></models-page>`)
			.on("/model/:id", (match) => this.routerOutlet = html`<model-page id=${match?.data?.id}></model-page>`)
			.notFound(() => this.routerOutlet = html`<not-found-page></not-found-page>`)
			.resolve();

	}

	render() {
		return html`
			<div class="container">
				${this.routerOutlet}
			</div>`
	}

	static styles = css`
		.container {
			max-width: calc(var(--largura-do-app) - var(--espacamento) - var(--espacamento));
			min-height: 100vh;
			margin: 0 auto;
			padding: 0 var(--espacamento);

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
