import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Profile } from '../../../types/profile-type';

import '../../header-component/numbered-star-header'
import '../../header-component/back-link-header'

@customElement('model-header-background')
export class ModelHeaderInfo extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	render() {
		return this.profile ? html`
			<div class="image-container">
				<img src="${this.profile.bannerSrc}"/>

				<back-link-header></back-link-header>

				<numbered-star-header stars="${this.profile.nudometro}"></numbered-star-header>
			</div>` : nothing;
	}

	static styles = css`
		.image-container {
			position: relative;
			width: calc(100% + var(--espacamento) + var(--espacamento));
			margin-left: calc(-1 * var(--espacamento));
			margin-right: calc(-1 * var(--espacamento));
		}

		.image-container::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to bottom, rgba(33, 37, 41, 0%) 0%, rgba(52, 58, 64, 1) 100%) 100%;
			pointer-events: none;
		}

		.image-container img {
			width: 100%;
			height: var(--header-height);
			margin: 0 0 0 0;
			object-fit: cover;
		}`
}
