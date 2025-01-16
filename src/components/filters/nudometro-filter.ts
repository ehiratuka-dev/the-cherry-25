import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('nudometro-filter')
export class NudometroFilter extends LitElement {
	@property({ type: Number }) rating = 0

	private updateRating(index: number) {
		this.rating = index + 1
		this.dispatchEvent(
			new CustomEvent('rating-changed', {
				detail: { rating: this.rating },
				bubbles: true,
				composed: true,
			})
		)
	}

	render() {
		return html`
			<div class="stars">
				${[0, 1, 2, 3, 4].map(
					(i) => html`
						<button
							class="${i < this.rating ? 'selected' : ''}"
							@click="${() => this.updateRating(i)}"
						>
							★
						</button>
					`
				)}
			</div>
		`
	}

	static styles = css`
		:host {
			display: inline-block;
			font-family: Arial, sans-serif;
		}

		.stars {
			display: flex;
			gap: 4px;
		}

		.stars button {
			background: none;
			border: none;
			font-size: 24px;
			cursor: pointer;
			color: #ccc;
			padding: 0;
		}

		.stars button.selected {
			color: #ffd700;
		}
	`
}
