import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('running-env-component')
export class RunningEnvComponent extends LitElement {
    @property()
    id: string = '';

    render() {
        return html`<div class="${ import.meta.env.MODE }">Running on ${ import.meta.env.MODE }</div>`
    }

    static styles = css`
        div {
            background-color: rgba(255, 0 , 0, 0.2);
            color: white;

            text-align: center;
            width: 100%;
            max-width: calc(1080px - 24px);
            padding: 12px 12px;

            display: none;
            position: absolute;
            bottom: 0;
            z-index: 100;
        }
            
        div.development {
            display: block;
        }`
}