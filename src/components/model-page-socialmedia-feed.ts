import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { SocialMedia } from '../types/social-media-type';

@customElement('model-page-socialmedia-feed')
export class ModelPageSocialMediaFeed extends LitElement {
    @property()
    assets:  Array<SocialMedia> = [];

    connectedCallback(): void {
        super.connectedCallback();
    }

    render() {
        return html`
            <div class="feed">
                ${ repeat(this.assets ? this.assets: [], (asset: SocialMedia) => asset.profile, (asset: SocialMedia) =>  html` 
                    <img src="${ asset.montarFeedSrc }" />
                `) }
            </div>`
    }

    static styles = css`
        .feed {
            margin-top: calc(250px + max(130px, 20%) - 350px);
            padding: var(--espacamento)
        }
            
        img {
            width: 150px;
        }`
}