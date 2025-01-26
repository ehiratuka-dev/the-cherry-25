import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ProfileClass } from '../../utils/ProfileClass'
import { Category } from '../../types/category'
import { repeat } from 'lit/directives/repeat.js'
import '../buttons/category-filter-button'
import { CategoryFilterChangedEvent } from '../events/CategoryFilterChangedEvent'
import { ProfileListUpdatedEvent } from '../events/ProfileListUpdatedEvent'

@customElement('profile-filter-section')
export class ProfileFilterSection extends LitElement {
	@property()
	categories: Array<Category> = []

	selectedCategories: Array<Category> = []

	async connectedCallback() {
		super.connectedCallback()
		this.categories = await ProfileClass.getCategories()
	}

	categoryFilterChanged(event: CategoryFilterChangedEvent) {
		const index = this.selectedCategories.findIndex(
			(c: Category) => c.id === event.category.id
		)

		if (index !== -1) {
			this.selectedCategories.splice(index, 1)
		} else {
			this.selectedCategories.push(event.category)
		}
		this.dispatchEvent(new ProfileListUpdatedEvent(this.selectedCategories))
	}

	render() {
		return html`
			<div class="profile-filter-container">
				<div class="filter-category">
					${repeat(
						this.categories,
						(category: Category) => category.id,
						(category: Category) => html`
							<category-filter-button
								@categoryFilterChanged="${this
									.categoryFilterChanged}"
								.category="${category}"
							></category-filter-button>
						`
					)}
				</div>

				<nudometro-filter></nudometro-filter>
			</div>
		`
	}

	static styles = css`
		.profile-filter-container {
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
