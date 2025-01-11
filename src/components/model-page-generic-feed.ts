import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { AssetType } from '../types/asset-type';

@customElement('model-page-generic-feed')
export class ModelPageGenericFeed<T extends AssetType> extends LitElement {
    @property()
    title: string = '';

    @property()
    assets:  Array<T> = [];

    connectedCallback(): void {
        super.connectedCallback();
    }

    render() {
        return this.assets && this.assets.length > 0 ? html`
            <div class="feed">
                <p class="font-subtitle">${ this.title }</p>
                ${ repeat(this.assets, (asset: T) => asset.profile, (asset: T) =>  html` 
                    <img src="${ asset.montarFeedSrc }" />
                `) }
            </div>`
        : html``;
    }

    static styles = css`
        .feed {
            padding: var(--espacamento);
        }

        .feed p {
            font-size: var(--tamanho-do-subtitulo);
        }
            
        img {
            border-radius: var(--borda-arredondada);
            width: 150px;
        }`
}