import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import Navigo from 'navigo';

import './pages/model-page'
import './pages/models-page'

@customElement('the-cherry-25-app')
export class TheCherry25App extends LitElement {
	@state()
	private routerOutlet = html`<models-page></models-page>`;

	private router!: Navigo;

	constructor() {
		super();
		this.router = new Navigo('/', { hash: true });
		this.router
			.on('/', () => this.routerOutlet = html`<models-page></models-page>`)
			.on('/models', () => this.routerOutlet = html`<models-page></models-page>`)
			.on("/model/:id", (match) => this.routerOutlet = html`<model-page id=${match?.data?.id}></model-page>`)
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
			max-width: var(--largura-do-app);
			min-height: 100vh;
			margin: 0 auto;

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
