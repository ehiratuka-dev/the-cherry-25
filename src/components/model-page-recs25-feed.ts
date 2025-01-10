import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { RECs25 } from '../types/recs25/recs25-type';

@customElement('model-page-recs25-feed')
export class ModelPageRECs25Feed extends LitElement {
    @property()
    assets:  Array<RECs25> = [];

    connectedCallback(): void {
        super.connectedCallback();
    }

    render() {
        return html`
            <div class="feed">
                ${ repeat(this.assets ? this.assets: [], (asset: RECs25) => asset.profile, (asset: RECs25) =>  html` 
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