import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { AssetType } from '../types/asset-type';

@customElement('model-page-generic-feed')
export class ModelPageGenericFeed<T extends AssetType> extends LitElement {
    @property()
    assets:  Array<T> = [];

    connectedCallback(): void {
        super.connectedCallback();
    }

    render() {
        return html`
            <div class="feed">
                ${ repeat(this.assets ? this.assets: [], (asset: T) => asset.profile, (asset: T) =>  html` 
                    <img src="${ asset.montarFeedSrc }" />
                `) }
            </div>`
    }

    static styles = css`
        .feed {
            padding: var(--espacamento)
        }
            
        img {
            width: 150px;
        }`
}