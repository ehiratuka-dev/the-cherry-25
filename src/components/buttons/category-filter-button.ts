import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'

import * as mdiIcons from '@mdi/js';

import { Asset } from '../../types/asset';
import { BaseButton } from './base-button';

@customElement('category-filter-button')
export class CategoryFilterButton extends BaseButton {
	@property()
	asset: Asset | undefined;

	constructor() {
		super();
	}

	updated(changedProperties: Map<string, string>) {
		super.updated(changedProperties);
		if (changedProperties.has('asset') && this.asset) {
			const iconName = this.asset.icon;
			const iconPath = mdiIcons[iconName as keyof typeof mdiIcons];

			this.icon = iconPath;
			this.text = this.asset.name;
			this.color = `var(--bs-${this.asset?.color})`;
		}
	}

	handleClick() {
		console.log(this.asset?.name);
	}
}
