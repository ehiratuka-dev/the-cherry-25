import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { Profile, ProfileManager } from '../utils/profile-manager';

import '../components/model-page-header'
import '../components/model-page-recs25-feed'
import '../components/model-page-generic-feed'

@customElement('model-page')
export class ModelPage extends LitElement {
    @property()
    id: string = '';

    @state()
    profile: Profile | undefined = undefined;

    connectedCallback() {
        super.connectedCallback();

        const manager = new ProfileManager();
        manager.getProfileById(this.id).then((profile: Profile | undefined) => {
            this.profile = profile;
        });
    }

    render() {
        return html`
            <div class="container">
                <model-page-header id=${ this.id }></model-page-header>
                <model-page-generic-feed .assets=${ this.profile?.socialMedia }></model-page-generic-feed>
                <model-page-generic-feed .assets=${ this.profile?.recs25 }></model-page-generic-feed>
            </div>`
    }
    static styles = css`
        .container {
            background-color: var(--container-color);
            min-height: 100vh;
            position: relative;
            color: var(--primary-text-color);
        }`
}
