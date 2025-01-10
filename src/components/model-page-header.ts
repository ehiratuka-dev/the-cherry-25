import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { montarBanner } from '../utils/mount-url';

import './icon-component';

@customElement('model-page-header')
export class ModelPageHeaderComponent extends LitElement {
    @property()
    id: string = '';

    render() {
        return html`
            <div class="image-container">
                ${ montarBanner(this.id) }
            </div>

            <a href="../models">Voltar</a>

            <icon-component id=${ this.id }>
            </icon-component>`
    }

    static styles = css`

        a {
            position: absolute;
            left: var(--espacamento);
            top: var(--espacamento);
            text-decoration: none;
            color: var(--primary-text-color);

            font-size: var(--tamanho-do-subtitulo);
        }

        icon-component {
            position: absolute;
            top: 250px;
            left: var(--espacamento);

            width: calc(100% - var(--espacamento) - var(--espacamento));
        }

        p {
            position: absolute;
            right: var(--espacamento);

            color: var(--primary-text-color);
            margin: 0;
            padding: 0;
        }

        .image-container {
            position: relative;
        }

        .image-container img {
            display: block;
            width: 100%;
            height: 350px;
            margin: 0 0 0 0;
            object-fit: cover;
        }

        .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
            pointer-events: none;
        }`
}
