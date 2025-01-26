import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@jamescoyle/svg-icon'

export const enum COLORS {
	BLUE = 'blue',
	INDIGO = 'indigo',
	PURPLE = 'purple',
	PINK = 'pink',
	RED = 'red',
	ORANGE = 'orange',
	YELLOW = 'yellow',
	GREEN = 'green',
	TEAL = 'teal',
	CYAN = 'cyan',
	DEFAULT = 'transparent',
}

@customElement('base-button')
export abstract class BaseButton extends LitElement {
	@property()
	icon: string | undefined

	@property()
	text: string | undefined

	@property()
	color: COLORS | undefined

	constructor(
		text: string | undefined,
		icon: string | undefined,
		color: COLORS | undefined
	) {
		super()
		this.text = text
		this.icon = icon
		this.color = color
	}

	protected abstract handleClick(): void

	render() {
		return html` <div
			class="container-base-button"
			@click="${this.handleClick}"
		>
			<svg-icon type="mdi" path="${this.icon}"></svg-icon>
			<p>${this.text}</p>
		</div>`
	}

	protected updated(changedProperties: Map<string, unknown>): void {
		super.updated(changedProperties)
		if (changedProperties.has('color')) {
			this.style.setProperty(
				'--button-bg-color',
				`var(--bs-${this.color})`
			)
			this.style.setProperty(
				'--button-text-color',
				`var(--bs-${this.color}-subtle)`
			)
		}
	}

	static styles = css`
		.container-base-button {
			display: flex;
			align-items: center;

			border-radius: var(--borda-arredondada);

			cursor: pointer;
			position: relative;

			transition: var(--button-transition);
			box-shadow: var(--button-box-shadow);
			transform: var(--button-transform);

			background-color: var(--button-bg-color);
			color: var(--button-text-color);
			padding: var(--button-spacing);
			font-size: var(--button-text-size);
		}

		.container-base-button p {
			margin: 0 0 0 var(--espacamento);
		}
	`
}
