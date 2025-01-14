import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Profile } from '../../types/profile-type';

import './model-header/header-info';
import '../headers/profile-header';

@customElement('model-page-header')
export class ModelPageHeaderComponent extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	render() {
		return this.profile ? html`
			<profile-header .profile="${this.profile}"></profile-header>
			<model-header-info .profile="${this.profile}"></model-header-info>` : nothing;
	}

	static styles = css``
}
