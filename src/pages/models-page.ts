import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ProfileClass } from '../utils/ProfileClass';
import { Profile } from '../types/profile-type';

import '../components/sections/profile-filter-section';
import '../components/sections/profile-list-section';

@customElement('models-page')
export class ModelsPage extends LitElement {
	@property()
	protected profiles: Profile[] | undefined;

	constructor() {
		super();
	}

	async connectedCallback() {
		super.connectedCallback();
		this.profiles = await ProfileClass.getProfiles();
	}

	render() {
		return this.profiles ? html`
			<div class="container">
				<profile-filter-section></profile-filter-section>
				<profile-list-section .profiles="${ this.profiles }"></profile-list-section>
			</div>` : nothing;
	}
}
