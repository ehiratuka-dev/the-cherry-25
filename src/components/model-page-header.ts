import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import './icon-component';

@customElement('model-page-header')
export class ModelPageHeaderComponent extends LitElement {
    @property()
    id: string = '';

    render() {
        return html`
            <div class="image-container">
                <img src="../data/Social%20Media/@${ this.id }/@${ this.id } notion-banner.png" />

                <div class="back-link">
                    <a href="../models">Voltar</a>
                </div>
            </div>

            <div class="header-info">
                <img src="../data/Social%20Media/@${ this.id }/@${ this.id } notion-icon.jpg" />
            </div>`
    }

    static styles = css`
        .image-container {
            position: relative;
        }

        .image-container img {
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
        }

        .back-link {
            display: block;
            position: absolute;
            top: var(--espacamento);
            left: var(--espacamento);
        }

        .back-link a {
            text-decoration: none;
            color: var(--primary-text-color);

            font-size: var(--tamanho-do-subtitulo);
        }

        .header-info {
            display: flex;
            position: relative;
            margin-top: min(calc(-20% / 2), calc(-120px / 2));
            padding: 0 var(--espacamento);
        }

        .header-info img {
            border-radius: 100%;
            border: 2px solid var(--primary-text-color);

            min-width: 120px;
            width: 20%;
        }`
}
