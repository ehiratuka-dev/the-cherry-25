import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Profile } from '../../types/profile-type';

import '../svgs/numbered-star-svg'
import '../buttons/back-link-button'
import './image-header'

@customElement('profile-header')
export class ProfileHeader extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	render() {
		return this.profile ? html`
			<image-header .imageSource="${this.profile?.bannerSrc}">
				<back-link-button></back-link-button>

				<numbered-star-header stars="${this.profile.nudometro}"></numbered-star-header>
			</image-header>` : nothing;
	}
}


