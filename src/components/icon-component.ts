import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('icon-component')
export class IconComponent extends LitElement {
    @property()
    id: string = '';

    render() {
        return html`
            <div class="icon-container">
                <img src="../profiles/@${ this.id }/@${ this.id } notion-icon.jpg" />
                <p>@${ this.id }</p>
            </div>`
    }
    static styles = css`
        .icon-container {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: flex-start;
        }

        p {
            margin: 0 0 0 var(--espacamento);
            padding: 0;
            color: var(--primary-text-color);
            font-size: var(--tamanho-do-titulo);
        }

        img {
            border: 5px solid var(--primary-text-color);
            border-radius: 100%;

            min-width: 120px;
            width: 20%;
            height: auto;
        }`
}

declare global {
    interface HTMLElementTagNameMap {
        'icon-component': IconComponent
    }
}
