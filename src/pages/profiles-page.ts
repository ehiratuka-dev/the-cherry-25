import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ProfileClass } from '../utils/ProfileClass'
import { Profile } from '../types/profile-type'

import '../components/sections/profile-filter-section'
import '../components/sections/profile-list-section'

@customElement('profiles-page')
export class ProfilesPage extends LitElement {
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
			? html`<div class="profile-page-container">
					<profile-filter-section></profile-filter-section>
					<profile-list-section
						.profiles="${this.profiles}"
					></profile-list-section>
				</div>`
			: nothing
	}

	static styles = css``
}
