import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ProfileClass } from '../utils/ProfileClass'
import { Profile } from '../types/profile-type'

import '../components/sections/profile-filter-section'
import '../components/sections/profile-list-section'
import { ProfileListUpdatedEvent } from '../components/events/ProfileListUpdatedEvent'

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

	handleProfilesListUpdated(event: ProfileListUpdatedEvent) {
		if (this.profiles) {
			event.filterProfiles(this.profiles).then((profiles) => {
				this.profiles = profiles
			})
		}
	}

	render() {
		return this.profiles
			? html`<div class="profile-page-container">
					<profile-filter-section
						@profileListUpdated="${this.handleProfilesListUpdated}"
					></profile-filter-section>
					<profile-list-section
						.profiles="${this.profiles}"
					></profile-list-section>
				</div>`
			: nothing
	}

	static styles = css``
}
