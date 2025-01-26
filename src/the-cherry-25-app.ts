import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { router } from './utils/Router'

import './pages/profile-page'
import './pages/profiles-page'
import './pages/not-found-page'

@customElement('the-cherry-25-app')
export class TheCherry25App extends LitElement {
	@state()
	private routerOutlet = html`<profiles-page></profiles-page>`

	constructor() {
		super()
		router
			.on(
				'/',
				() =>
					(this.routerOutlet = html`<profiles-page></profiles-page>`)
			)
			.on(
				'/profiles',
				() =>
					(this.routerOutlet = html`<profiles-page></profiles-page>`)
			)
			.on(
				'/profile/:id',
				(match) =>
					(this.routerOutlet = html`<profile-page
						id=${match?.data?.id}
					></profile-page>`)
			)
			.notFound(
				() =>
					(this.routerOutlet = html`<not-found-page></not-found-page>`)
			)
			.resolve()
	}

	render() {
		return html` <div class="container">${this.routerOutlet}</div>`
	}

	static styles = css`
		.container {
			max-width: calc(
				var(--largura-do-app) - var(--espacamento) - var(--espacamento)
			);
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
		}
	`
}
