import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ProfileClass } from '../../utils/ProfileClass'
import { Asset } from '../../types/asset'
import { repeat } from 'lit/directives/repeat.js'
import '../buttons/category-filter-button'
import { mdiArrowLeftBold } from '@mdi/js'

@customElement('profile-filter-section')
export class ProfileFilterSection extends LitElement {
	@property()
	assets: Array<Asset> = []

	async connectedCallback() {
		super.connectedCallback()
		this.assets = await ProfileClass.getAssets()
	}

	render() {
		return html`
			<div class="profile-filter">
				<div class="filter-category">
					${repeat(
						this.assets,
						(asset: Asset) => asset.id,
						(asset: Asset) => html`
							<category-filter-button
								.icon="${mdiArrowLeftBold}"
								.asset="${asset}"
							></category-filter-button>
						`
					)}
				</div>

				<nudometro-filter></nudometro-filter>
			</div>
		`
	}

	static styles = css`
		.profile-filter {
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: flex-start;
			margin-top: var(--espacamento);
		}

		.filter-category {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			margin-top: var(--espacamento);
		}

		.filter-category * {
			margin-right: var(--espacamento);
		}
	`
}
