import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import { mdiAccount } from '@mdi/js'
import { mdiCity } from '@mdi/js'
import { mdiInstagram } from '@mdi/js'

import { Profile } from '../../types/profile-type'

@customElement('profile-info-section')
export class ProfileInfoSection extends LitElement {
	@property()
	profile: Profile | undefined = undefined

	render() {
		return this.profile
			? html` <div class="header-info">
					<img src="${this.profile.iconSrc}" />

					<div class="tags">
						${this.profile.nome
							? html` <div class="tag">
									<svg-icon
										type="mdi"
										path="${mdiAccount}"
										style="color: var(--primary-color)"
									></svg-icon>
									<p>${this.profile.nome}</p>
								</div>`
							: nothing}
						${this.profile.cidade
							? html` <div class="tag">
									<svg-icon
										type="mdi"
										path="${mdiCity}"
										style="color: var(--primary-color)"
									></svg-icon>
									<p>${this.profile.cidade}</p>
								</div>`
							: nothing}
						${this.profile.instagram
							? html` <div class="tag">
									<svg-icon
										type="mdi"
										path="${mdiInstagram}"
										style="color: var(--primary-color)"
									></svg-icon>
									<p>${this.profile.instagram}</p>
								</div>`
							: nothing}
					</div>
				</div>`
			: nothing
	}

	static styles = css`
		.header-info {
			width: calc(100% + var(--espacamento) + var(--espacamento));
			display: flex;
			position: relative;
			margin-top: min(
				calc(calc(0% - var(--header-response-width)) / 2),
				calc(calc(0% - var(--header-min-response-width)) / 2)
			);
			margin-bottom: var(--espacamento);
		}

		.header-info img {
			min-width: var(--header-min-response-width);
			width: var(--header-response-width);

			border-radius: 100%;
		}

		.header-info .tags {
			width: calc(var(--largura-do-app) - var(--header-response-width));
			align-self: flex-end;

			display: flex;
			align-items: flex-start;
			flex-direction: column;
			row-gap: calc(var(--espacamento) / 2);
		}

		.tags .tag {
			background-color: var(--container-color);
			border-radius: var(--borda-arredondada);
			padding: calc(var(--espacamento) / 2) var(--espacamento);

			display: flex;
			align-items: center;
			margin-left: var(--espacamento);
		}

		.tag p {
			margin: 0 0 0 var(--espacamento);
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	`
}
