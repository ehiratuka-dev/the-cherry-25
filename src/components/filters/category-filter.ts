import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ProfileClass } from '../../utils/ProfileClass'
import { Asset } from '../../types/asset'

@customElement('category-filter')
export class CategoryFilter extends LitElement {
	@property({ type: Array }) assets: Asset[] = []
	@property({ type: Array }) selectedAssets: Asset[] = []

	constructor() {
		super()
		this.assets = ProfileClass.getAssets()
		this.style.setProperty('--button-spacing', '0.2rem 1rem')
		this.style.setProperty('--button-text-size', '0.75rem')
	}

	private toggleCategory(asset: Asset) {
		if (this.selectedAssets.includes(asset)) {
			this.selectedAssets = this.selectedAssets.filter(
				(selectedAsset) => selectedAsset !== asset
			)
		} else {
			this.selectedAssets = [...this.selectedAssets, asset]
		}
		this.dispatchEvent(
			new CustomEvent('categories-changed', {
				detail: { selectedCategories: this.selectedAssets },
				bubbles: true,
				composed: true,
			})
		)
	}

	render() {
		return html`
			<div class="category-list">
				${this.assets.map(
					(asset) => html`
						<div class="category-item">
							<input
								type="checkbox"
								id="asset-${asset.id}"
								.checked="${this.selectedAssets.includes(
									asset
								)}"
								@change="${() => this.toggleCategory(asset)}"
								hidden
							/>
							<label for="asset-${asset.id}">${asset.name}</label>
						</div>
					`
				)}
			</div>
		`
	}

	static styles = css`
		:host {
			display: block;
			font-family: Arial, sans-serif;
		}

		.category-list {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
		}

		.category-item {
			display: flex;
			align-items: center;

			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			cursor: pointer;
			position: relative;

			background-color: var(--button-bg-color);
			color: var(--button-text-color);
			padding: var(--button-spacing);
			font-size: var(--button-text-size);
		}

		.category-item label {
			margin: 0 0 0 var(--espacamento);
		}

		.category-list input:checked + label {
			background-color: #007bff;
			color: #fff;
			border-color: #0056b3;
		}
	`
}
