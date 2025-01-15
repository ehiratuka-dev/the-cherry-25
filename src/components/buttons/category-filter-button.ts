import { css } from 'lit'
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
		if (changedProperties.has('asset') && this.asset) {
			const iconName = this.asset.icon;
			const iconPath = mdiIcons[iconName as keyof typeof mdiIcons];

			this.icon = iconPath;
			this.text = this.asset.name;
		}
	}

	handleClick() {
		console.log(this.asset?.name);
	}

	static styles = css`
		.category-filter {
			display: flex;
			align-items: center;
		
			padding: var(--espacamento);
			border-radius: var(--borda-arredondada);
			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);

			cursor: pointer;
		}

		.category-filter p {
			margin: 0 0 0 var(--espacamento);
		}`
}
