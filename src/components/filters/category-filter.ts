import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ProfileClass } from '../../utils/ProfileClass'
import { Category } from '../../types/category'

@customElement('category-filter')
export class CategoryFilter extends LitElement {
	@property({ type: Array }) categories: Category[] = []
	@property({ type: Array }) selectedCategories: Category[] = []

	constructor() {
		super()
		this.categories = ProfileClass.getCategories()
		this.style.setProperty('--button-spacing', '0.2rem 1rem')
		this.style.setProperty('--button-text-size', '0.75rem')
	}

	private toggleCategory(category: Category) {
		if (this.selectedCategories.includes(category)) {
			this.selectedCategories = this.selectedCategories.filter(
				(selectedCategory) => selectedCategory !== category
			)
		} else {
			this.selectedCategories = [...this.selectedCategories, category]
		}
		this.dispatchEvent(
			new CustomEvent('categories-changed', {
				detail: { selectedCategories: this.selectedCategories },
				bubbles: true,
				composed: true,
			})
		)
	}

	render() {
		return html`
			<div class="category-list">
				${this.categories.map(
					(category) => html`
						<div class="category-item">
							<input
								type="checkbox"
								id="category-${category.id}"
								.checked="${this.selectedCategories.includes(
									category
								)}"
								@change="${() => this.toggleCategory(category)}"
								hidden
							/>
							<label for="category-${category.id}"
								>${category.name}</label
							>
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
