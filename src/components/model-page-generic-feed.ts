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
            <p class="font-subtitle">${ this.title }</p>
            <div class="feed">
                ${ repeat(this.assets, (asset: T) => asset.profile, (asset: T) =>  html` 
                    <img src="${ asset.montarFeedSrc }" />
                `) }
            </div>`
        : html``;
    }

    static styles = css`
        .feed {
            padding: 0 var(--espacamento);
            margin: 0 0 var(--espacamento);
            display: grid;
            gap: var(--espacamento);
            grid-template-columns: repeat(auto-fit, minmax(166px, 1fr));
        }

        .feed img {
            width: 100%;
            max-width: 166px;
            aspect-ratio: 9 / 16;
            object-fit: cover;

			transition: box-shadow 0.3s ease;
            box-shadow: var(--box-shadow);
            border-radius: var(--borda-arredondada);
			cursor: pointer;
        }

        .feed img:hover {
            box-shadow: none;
        }

        p {
            font-size: var(--tamanho-do-subtitulo);
            padding: 0 var(--espacamento);
            margin: 0 0 var(--espacamento);
        }`
}