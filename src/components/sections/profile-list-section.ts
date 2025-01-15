import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import { ProfileClass } from '../../utils/ProfileClass'
import { Profile } from '../../types/profile-type'

import './profile-item-section'

@customElement('profile-list-section')
export class ProfileListSection extends LitElement {
	@property()
	protected profiles: Profile[] | undefined

	constructor() {
		super()
	}

	async connectedCallback() {
		super.connectedCallback()
		this.profiles = await ProfileClass.getProfiles()
	}

	render() {
		return this.profiles
			? html` <div class="secao">
					<p class="font-subtitle">Profiles</p>
					<div class="lista-blocos">
						${repeat(
							this.profiles.filter(
								(profile) => profile.hidden === false
							),
							(profile: Profile) => profile.id,
							(profile) => html`
					<profile-item-section .profile="${profile}"></profile-section>
				`
						)}
					</div>
				</div>`
			: nothing
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
			font-size: var(--tamanho-do-subtitulo);
		}

		.lista-blocos {
			width: 100%;
			height: auto;

			display: flex;
			flex-wrap: wrap;
			gap: var(--espacamento);
		}
	`
}
