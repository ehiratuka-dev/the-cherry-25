import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AssetType } from '../types/asset-type';
import 'fa-icons';

@customElement('model-page-modal')
export class ModelPageModal extends LitElement {
	@property()
	open: boolean;
	
	@property()
	index: number;
	
	@property()
	gallery: Array<AssetType> = [];

	constructor() {
		super();
		this.open = false;
		this.index = 0;
	}

	closeModal() {
		this.dispatchEvent(new CustomEvent('modal-closed', { bubbles: true, composed: true }));
	}

	nextImage() {
		if(this.gallery.length - 1 > this.index) {
			this.index++;
		} else {
			this.index = 0;
		}
	}

	previousImage() {
		if(this.index > 0) {
			this.index--;
		} else {
			this.index = this.gallery.length - 1;
		}
	}

	render() {
		return html`
			<div 
				class="overlay"
				?open="${ this.open }">
					<div class="modal">
						<button
							class="close-button"
							@click="${ this.closeModal }">
								<fa-icon path-prefix="../node_modules" color="var(--primary-text-color)" class="fas fa-times" size="16"></fa-icon>	
						</button>
						<button
							class="previous-button"
							@click="${ this.previousImage }">
								<fa-icon path-prefix="../node_modules" color="var(--primary-text-color)" class="fas fa-chevron-left" size="16"></fa-icon>
						</button>
						<img src="${ this.gallery[this.index]?.montarFeedSrc }" />
						<button
							class="next-button"
							@click="${ this.nextImage }">
								<fa-icon path-prefix="../node_modules" color="var(--primary-text-color)" class="fas fa-chevron-right" size="16"></fa-icon>
						</button>
					</div>
			</div>`;
	}

	static styles = css`
		:host {
			display: block;
		}

		.overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1000;

			transition: visibility 0s, opacity 0.3s ease-in-out;
			visibility: hidden;
			opacity: 0;
		}

		.overlay[open] {
			visibility: visible;
			opacity: 1;
		}

		.modal {
			background: var(--primary-text-color);
			padding: var(--espacamento);
			border-radius: var(--borda-arredondada);
			box-shadow: var(--box-shadow);

			position: relative;
			max-width: 500px;
			width: 100%;
		}

		.modal img {
			width: 100%;
			height: auto;
		}

		.modal button {
			background: none;
			border: none;
			font-size: 1.5rem;
			font-weight: bold;
			position: absolute;
			cursor: pointer;

            background-color: var(--container-color);
            padding: var(--espacamento);
            border-radius: var(--borda-arredondada);
            box-shadow: var(--box-shadow);
		}

		.close-button {
			top:12px;
			right: 12px;
		}

		.next-button {
			right: 12px;
			top: 50%;
		}
			
		.previous-button {
			left: 12px;
			top: 50%;
		}`;
}
