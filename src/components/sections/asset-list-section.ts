import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

import { AssetType } from '../../types/asset-type';

@customElement('asset-list-section')
export class AssetListection<T extends AssetType> extends LitElement {
	@property()
	title: string = '';

	@property()
	assets: Array<T> = [];

	@state()
	showModal: boolean = false;

	@state()
	name: string = '';

	openModal(e: CustomEvent) {
		this.name = e.detail;
		this.showModal = true;
	}

	closeModal() {
		this.showModal = false;
	}

	onBlockClick(e: Event): void {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent('modal-opened', {
			detail: {
				index: (e.target as HTMLButtonElement).dataset.index,
				gallery: this.assets
			},
			bubbles: true,
			composed: true
		}));
	}

	render() {
		return this.assets && this.assets.length > 0 ? html`
			<p class="font-subtitle">${this.title}</p>
			
			<div
				class="feed-container"
				@modal-opened = "${this.openModal}">
					${repeat(this.assets, (asset: T) => asset.profile, (asset: T, index: number) => html` 
						<div class="feed-item">
							<img src="${asset.assetSrc}" @click="${this.onBlockClick}" data-index=${index}/>
						</div>
					`)}
			</div>
			
			<model-page-modal
				.open = "${this.showModal}"
				.name = "${this.name}"
				@modal-closed = "${this.closeModal}">
			</model-page-modal>`
			: html``;
	}

	static styles = css`
		.feed-container {
			margin: 0 0 var(--espacamento);
			display: grid;
			gap: var(--espacamento);
			grid-template-columns: repeat(auto-fit, minmax(var(--block-size), 1fr));
		}

		.feed-container .feed-item {
			width: 100%;
			height: 100%;
			max-width: var(--block-size);
			aspect-ratio: 9 / 16;
		}

		.feed-item img {
			width: 100%;
			height: auto;
			aspect-ratio: 9 / 16;
			object-fit: cover;
			cursor: pointer;
			border-radius: var(--borda-arredondada);

			transition: var(--box-shadow-transition);
			box-shadow: var(--box-shadow);
		}

		.feed-item img:hover {
			box-shadow: var(--box-shadow-hover);
		}

		p {
			font-size: var(--tamanho-do-subtitulo);
			margin: 0 0 var(--espacamento);
		}`
}