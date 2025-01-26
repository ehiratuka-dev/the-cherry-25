import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'
import * as mdiIcons from '@mdi/js'

import { Category } from '../../types/category'
import { SelectButton } from './select-button'
import { COLORS } from './_base-button'

@customElement('category-filter-button')
export class CategoryFilterButton extends SelectButton {
	@property()
	category: Category | undefined

	constructor(category: Category) {
		super(category)
		this.category = category
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
