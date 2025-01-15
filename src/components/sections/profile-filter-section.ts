import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ProfileClass } from '../../utils/ProfileClass';
import { Asset } from '../../types/asset';
import { repeat } from 'lit/directives/repeat.js';
import '../buttons/category-filter-button';
import { mdiArrowLeftBold } from '@mdi/js';

@customElement('profile-filter-section')
export class ProfileFilterSection extends LitElement {
	@property()
	assets: Array<Asset> = [];

	async connectedCallback() {
		super.connectedCallback();
		this.assets = await ProfileClass.getAssets();
	}

	render() {
		return html`
			<div class="filter-category">
				${repeat(this.assets, (asset: Asset) => asset.id, (asset: Asset) => html` 
					<category-filter-button .icon="${mdiArrowLeftBold}" .asset="${asset}"></category-filter-button>
				`)}
			</div>
		`;
	}

	static styles = css`
			.filter-category {
				display: flex;
			}
		.
	`
}
