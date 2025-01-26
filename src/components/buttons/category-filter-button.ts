import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import * as mdiIcons from '@mdi/js'

import { Category } from '../../types/category'
import { SelectButton } from './select-button'
import { COLORS } from './_base-button'
import { CategoryFilterChangedEvent } from '../events/CategoryFilterChangedEvent'

@customElement('category-filter-button')
export class CategoryFilterButton extends SelectButton {
	@property()
	category: Category | undefined

	constructor(category: Category | undefined) {
		super(category?.name, category?.icon, category?.color)
		this.category = category
	}

	handleClick() {
		super.handleClick()
		if (this.category) {
			this.dispatchEvent(new CategoryFilterChangedEvent(this.category))
		}

		// this.dispatchEvent(
		// 	new CustomEvent('categoryFilterChanged', {
		// 		detail: { category: this.category }, // Dados do evento
		// 		bubbles: true, // Para propagar no DOM
		// 		composed: true, // Para atravessar Shadow DOM
		// 	})
		// )
	}

	getStatusFromString(statusString: string): COLORS {
		return statusString as COLORS
	}

	updated(changedProperties: Map<string, string>) {
		super.updated(changedProperties)
		if (changedProperties.has('category') && this.category) {
			const iconName = this.category.icon
			const iconPath = mdiIcons[iconName as keyof typeof mdiIcons]

			this.icon = iconPath
			this.text = this.category.name
			this.color = this.category.color as COLORS
		}
	}
}
