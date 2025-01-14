import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { repeat } from 'lit/directives/repeat.js';
import { ProfileClass } from '../utils/ProfileClass';
import { Profile } from '../types/profile-type';

import '../components/models-page/model-block';

@customElement('models-page')
export class ModelsPage extends LitElement {
    @state()
    protected profiles: Profile[] | undefined;

    constructor() {
        super();
    }

    async connectedCallback() {
        super.connectedCallback();
        this.profiles = await ProfileClass.getProfiles();
    }

    render() {
        return this.profiles ? html`<div class="container">
                <div class="secao">
                    <p class="font-subtitle">Profiles</p>
                    <div class="lista-blocos">
                        ${repeat(this.profiles.filter(profile => profile.hidden === false), (profile: Profile) => profile.id, (profile) => html`
                            <model-block .profile="${ profile }"></model-block>
                        `)}
                    </div>
                </div>
            </div>` : html`<div>LOADING</div>`
    }
    static styles = css`
        .container {
            padding: 0 var(--espacamento);
        }

        .secao {
            padding: 48px 0 var(--espacamento) 0;
            gap: var(--espacamento);
            width: 100%;
            height: auto;
        
            display: flex;
            flex-direction: column;
        }

        .secao p {
            margin: 0px;
            padding: 0px;

			color: var(--primary-text-color);
            font-size: var(--tamanho-do-titulo);
        }
        
        .lista-blocos {
            width: 100%;
            height: auto;
        
            display: flex;
            flex-wrap: wrap;
            gap: var(--espacamento);
        }`
}
