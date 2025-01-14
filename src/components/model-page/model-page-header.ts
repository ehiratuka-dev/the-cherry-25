import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { Profile } from '../../types/profile-type';

import './model-header/header-info';
import './model-header/header-background';

@customElement('model-page-header')
export class ModelPageHeaderComponent extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	render() {
		return this.profile ? html`
			<model-header-background .profile="${this.profile}"></model-header-background>
			<model-header-info .profile="${this.profile}"></model-header-info>` : nothing;
	}

	static styles = css``
}
