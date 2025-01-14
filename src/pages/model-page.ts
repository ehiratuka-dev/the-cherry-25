import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { AssetType } from '../types/asset-type';
import { ProfileClass } from '../utils/ProfileClass';
import { Profile } from '../types/profile-type';

import '../components/model-page/model-page-header'
import '../components/model-page/model-page-generic-feed'
import '../components/model-page/model-header/model-page-modal'

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
        this.showModal = false;
    }

    render() {
        return html`
            <div class = "container" @modal-opened = "${ this.openModal }">
                <model-page-header
                    .profile = "${ this.profile }"></model-page-header>

                <model-page-generic-feed
                    .assets = "${ this.profile?.socialMedia }"
                    title = "Social Media"></model-page-generic-feed>

                <model-page-generic-feed
                    .assets = "${ this.profile?.recs25 }"
                    title = "RECs25"></model-page-generic-feed>
            </div>

            <model-page-modal 
                .open = "${ this.showModal }"
                .index = "${ this.index }"
                .gallery = "${ this.gallery }"
                @modal-closed = "${ this.closeModal}"></model-page-modal>`
    }
    static styles = css`
        .container {
            background-color: var(--container-color);
            min-height: 100vh;
            position: relative;
            color: var(--primary-text-color);
        }`
}
