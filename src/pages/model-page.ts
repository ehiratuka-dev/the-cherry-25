import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import '../components/icon-component';
import { Post, Profile, ProfileManager } from '../utils/profile-manager';
import { repeat } from 'lit/directives/repeat.js';
import '../components/model-header'

@customElement('model-page')
export class ModelPage extends LitElement {
    @property()
    id: string = '';

    @state()
    profile: Profile | undefined = undefined;
    
    constructor() {
        super();
    }

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
                <model-header-component id=${ this.id }></model-header-component>
                
                <div class="feed">
                    ${repeat(this.profile ? this.profile.feed : [], (post: Post) => post.data, (post) => html`
                        <img src="../profiles/@${ this.profile?.id }/@${ this.profile?.id } feed-${ post.sequencial ? post.data + '-' + post.sequencial : post.data }.jpg"/>
                    `)}
                </div>
            </div>`
    }
    static styles = css`
        .container {
            background-color: black;
            min-height: 100vh;
            position: relative;
            color: white;
        }
            
        .feed {
            margin-top: calc(250px + max(130px, 20%) - 350px);
            padding: var(--espacamento)
        }
            
        img {
            width: 150px;
        }`
}

declare global {
    interface HTMLElementTagNameMap {
        'model-page': ModelPage
    }
}
