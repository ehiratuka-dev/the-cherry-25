import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { ProfileClass } from '../utils/ProfileClass';
import { Profile } from '../types/profile-type';

import '../components/sections/profile-section';

@customElement('models-page')
export class ModelsPage extends LitElement {
	@state()
	protected profiles: Profile[] | undefined;

	constructor() {
		super();
	}

	async connectedCallback() {
		super.connectedCallback();
		this.profiles = await ProfileClass.getProfiles();
	}

	render() {
		return this.profiles ? html`<div class="container">
				<div class="secao">
					<p class="font-subtitle">Profiles</p>
					<div class="lista-blocos">
						${repeat(this.profiles.filter(profile => profile.hidden === false), (profile: Profile) => profile.id, (profile) => html`
							<profile-section .profile="${ profile }"></profile-section>
						`)}
					</div>
				</div>
			</div>` : html`<div>LOADING</div>`
	}

	static styles = css`

		.secao {
			padding: calc(4 * var(--espacamento)) 0 var(--espacamento) 0;
			gap: var(--espacamento);
			width: 100%;
			height: auto;
		
			display: flex;
			flex-direction: column;
		}

		.secao p {
			margin: 0;
			padding: 0;

			color: var(--primary-text-color);
			font-size: var(--tamanho-do-titulo);
		}
		
		.lista-blocos {
			width: 100%;
			height: auto;
		
			display: flex;
			flex-wrap: wrap;
			gap: var(--espacamento);
		}`
}
