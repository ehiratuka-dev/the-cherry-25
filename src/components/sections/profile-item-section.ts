import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Profile } from '../../types/profile-type';

@customElement('profile-item-section')
export class ProfileItemSection extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	private _onClick() {
		window.location.href = `/#model/${this.profile?.id}`
	}

	render() {
		return html`
			<div class="bloco" @click=${this._onClick}>
				<img src="${this.profile?.bannerSrc}"/>
				<p>@${this.profile?.id}</p>
			</div>`
	}

	static styles = css`
		.bloco {
			display: flex;
			flex-direction: column;

			transition: box-shadow 0.3s ease;
			box-shadow: var(--box-shadow);
			border-radius: var(--borda-arredondada);
			cursor: pointer;
		}

		.bloco:hover {
			box-shadow: none;
		}

		.bloco img {
			width: var(--block-size);
			aspect-ratio: 9 / 5;

			object-fit: cover;
			border-top-left-radius: var(--borda-arredondada);
			border-top-right-radius: var(--borda-arredondada);
		}

		.bloco p {
			margin: 0;
			padding: var(--espacamento) var(--espacamento);

			background-color: var(--primary-color);
			color: var(--primary-text-color);

			border-bottom-left-radius: var(--borda-arredondada);
			border-bottom-right-radius: var(--borda-arredondada);
		}`
}