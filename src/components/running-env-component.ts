import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('running-env-component')
export class RunningEnvComponent extends LitElement {
	render() {
		return html`<div class="${import.meta.env.MODE}">Running on ${import.meta.env.MODE}</div>`
	}

	static styles = css`
		:host {
			display: flex;
			justify-content: center;
		}
		div {
			background-color: rgba(255, 0 , 0, 0.2);
			color: white;

			text-align: center;
			width: 100%;
			max-width: calc(var(--largura-do-app) - var(--espacamento) - var(--espacamento));
			padding: var(--espacamento);

			display: none;
			position: fixed;
			bottom: 0;
			z-index: 100;
		}
			
		div.development {
			display: block;
		}`
}