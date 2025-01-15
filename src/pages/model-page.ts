import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { AssetType } from '../types/asset-type';
import { ProfileClass } from '../utils/ProfileClass';
import { Profile } from '../types/profile-type';

import '../components/headers/profile-header'
import '../components/sections/profile-info-section'
import '../components/sections/asset-list-section'
import '../components/modals/gallery-modal'

@customElement('model-page')
export class ModelPage extends LitElement {
	@property()
	id: string = '';

	@state()
	profile: Profile | undefined = undefined;

	@state()
	showModal: boolean = false;

	@state()
	index: number = 0;

	@state()
	gallery: Array<AssetType> = [];

	async connectedCallback() {
		super.connectedCallback();
		this.profile = await ProfileClass.getProfileById(this.id);
	}

	openModal(e: CustomEvent) {
		this.index = e.detail.index;
		this.gallery = e.detail.gallery
		this.showModal = true;
	}

	closeModal() {
		this.index = 0;
		this.gallery = [];
		this.showModal = false;
	}

	render() {
		return html`
			<div class = "container" @modal-opened = "${this.openModal}">
				<profile-header .profile="${this.profile}"></profile-header>
				
				<profile-info-section .profile="${this.profile}"></profile-info-section>

				<asset-list-section
					.assets = "${this.profile?.socialMedia}"
					title = "Social Media"></asset-list-section>

				<asset-list-section
					.assets = "${this.profile?.recs25}"
					title = "RECs25"></asset-list-section>
			</div>

			<gallery-modal 
				.open = "${this.showModal}"
				.index = "${this.index}"
				.gallery = "${this.gallery}"
				@modal-closed = "${this.closeModal}"></gallery-modal >`
	}
	static styles = css``
}
