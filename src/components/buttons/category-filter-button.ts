import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'

import * as mdiIcons from '@mdi/js'

import { Asset } from '../../types/asset'
import { SelectButton } from './select-button'
import { COLORS } from './base-button'

@customElement('category-filter-button')
export class CategoryFilterButton extends SelectButton {
	@property()
	asset: Asset | undefined

	constructor() {
		super()
	}

	getStatusFromString(statusString: string): COLORS {
		return statusString as COLORS
	}

	updated(changedProperties: Map<string, string>) {
		super.updated(changedProperties)
		if (changedProperties.has('asset') && this.asset) {
			const iconName = this.asset.icon
			const iconPath = mdiIcons[iconName as keyof typeof mdiIcons]

			this.icon = iconPath
			this.text = this.asset.name
			this.color = this.asset.color as COLORS
		}
	}
}
