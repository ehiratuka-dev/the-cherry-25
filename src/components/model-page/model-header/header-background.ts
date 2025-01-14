import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { mdiArrowLeftBold } from '@mdi/js'

import { Profile } from '../../../types/profile-type';

@customElement('model-header-background')
export class ModelHeaderInfo extends LitElement {
    @property()
    profile: Profile | undefined = undefined;

    backLinkClik() {
		window.location.href = `/#models`
    }

    render() {
        return this.profile ? html`
            <div class="image-container">
                <img src="${ this.profile.bannerSrc }"/>

                <div class="back-link" @click="${ this.backLinkClik }">
                    <svg-icon type="mdi" path="${ mdiArrowLeftBold }" style="color: var(--primary-color)"></svg-icon>
                    <p>Voltar</p>
                </div>

                <div class="star">${ this.profile.nudometro }</div>
            </div>` : nothing;
    }

    static styles = css`
        .image-container {
            position: relative;
        }

        .image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(var(--page-color-rgb), 0%) 0%, rgba(var(--container-color-rgb), 1) 100%) 100%;
            pointer-events: none;
        }

        .image-container img {
            width: 100%;
            height: 350px;
            margin: 0 0 0 0;
            object-fit: cover;
        }

        .image-container .back-link {
            display: flex;
            align-items: center;

            position: absolute;
            cursor: pointer;
            top: var(--espacamento);
            left: var(--espacamento);

            background-color: var(--container-color);
            padding: var(--espacamento);
            border-radius: var(--borda-arredondada);
            color: var(--primary-text-color);

            transition: var(--box-shadow-transition);
            box-shadow: var(--box-shadow);
        }
            
        .image-container .back-link:hover {
            box-shadow: var(--box-shadow-hover);
        }

        .image-container .back-link p {
            margin: 0 0 0 var(--espacamento);
        }

        .star {
            position: absolute;
            right: var(--espacamento);
            top: var(--espacamento);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            background: gold;
            clip-path: polygon(
                50% 0%,
                61% 35%,
                98% 35%,
                68% 57%,
                79% 91%,
                50% 70%,
                21% 91%,
                32% 57%,
                2% 35%,
                39% 35%
            );
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }`
}
