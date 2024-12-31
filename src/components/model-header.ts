import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('model-header-component')
export class ModelHeaderComponent extends LitElement {
    @property()
    id: string = '';

    render() {
        return html`
            <div class="image-container">
                <img src="../profiles/@${ this.id }/@${ this.id } notion-banner.png" />
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

            font-size: 1rem;
        }
            
        @media (min-width: 540px) {
            a {
                font-size: 1.2rem;
            }
        }
            
        @media (min-width: 810px) {
            a {
                font-size: 1.4rem;
            }
        }
            
        @media (min-width: 1080px) {
            a {
                font-size: 1.6rem;
            }
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
            object-
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

declare global {
    interface HTMLElementTagNameMap {
        'model-header-component': ModelHeaderComponent
    }
}
