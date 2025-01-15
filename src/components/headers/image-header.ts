import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('image-header')
export class ImageHeader extends LitElement {
	@property()
	imageSource: string = '';

	render() {
		return this.imageSource ? html`
			<div class="image-container">
				<img src="${this.imageSource}"/>
				<slot></slot>
			</div>` : nothing;
	}

	static styles = css`
		.image-container {
			position: relative;
			width: calc(100% + var(--espacamento) + var(--espacamento));
			margin-left: calc(-1 * var(--espacamento));
			margin-right: calc(-1 * var(--espacamento));
		}

		.image-container::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			pointer-events: none;
		}

		.image-container img {
			width: 100%;
			height: var(--header-height);
			margin: 0 0 0 0;
			object-fit: cover;
		}`
}
