import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { ProfileClass } from '../utils/ProfileClass'
import { Profile } from '../types/profile-type'

import '../components/sections/profile-filter-section'
import '../components/sections/profile-list-section'
import '../components/filters/category-filter'
import '../components/filters/nudometro-filter'

@customElement('models-page')
export class ModelsPage extends LitElement {
	@property()
	protected profiles: Profile[] | undefined

	constructor() {
		super()
	}

	async connectedCallback() {
		super.connectedCallback()
		this.profiles = await ProfileClass.getProfiles()
	}

	render() {
		return this.profiles
			? html` <div>
					<div class="container">
						<profile-filter-section></profile-filter-section>
						<profile-list-section
							.profiles="${this.profiles}"
						></profile-list-section>
					</div>
				</div>`
			: nothing
	}

	static styles = css`
		.category-list {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
		}

		.category-list label {
			cursor: pointer;
			background-color: #f0f0f0;
			border: 1px solid #ccc;
			border-radius: 4px;
			padding: 6px 12px;
		}

		.category-list input:checked + label {
			background-color: #007bff;
			color: #fff;
			border-color: #0056b3;
		}
	`
}
