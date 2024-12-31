import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import '../components/model-block';
import { Profile, ProfileManager } from '../utils/profile-manager';
import { repeat } from 'lit/directives/repeat.js';

@customElement('models-page')
export class ModelsPage extends LitElement {
    @state()
    protected profiles: Profile[] = [];

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        const manager = new ProfileManager();
        manager.getProfiles().then((response: Profile[]) => {
            this.profiles = response;
        });
    }

    render() {
        return html`
            <div class="container">
                <div class="secao">
                    <p class="font-subtitle">Profiles</p>
                    <div class="lista-blocos">
                        ${repeat(this.profiles, (profile: Profile) => profile.id, (profile) => html`
                            <model-block tag="${ profile.id }"></model-block> <!-- ${ profile.id } -->
                        `)}
                    </div>
                </div>
            </div>`
    }
    static styles = css`
        .container {
            padding: 0 12px;
        }

        .secao {
            padding: 48px 0 12px 0;
            gap: 12px;
            width: 100%;
            height: auto;
        
            display: flex;
            flex-direction: column;
        }

        .secao p {
            font-size: 24px;
            margin: 0px;
            padding: 0px;
        }
        
        .lista-blocos {
            width: 100%;
            height: auto;
        
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }`
}

declare global {
    interface HTMLElementTagNameMap {
        'models-page': ModelsPage
    }
}
