import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('example-page')
export class ExamplePage extends LitElement {
	constructor() {
		super()
	}

	async connectedCallback() {
		super.connectedCallback()
	}

	render() {
		return html`<!-- Auteur: Simon Arnold -->
			<div class="multiplane">
				<div class="wrapper">
					<img
						src="https://assets.codepen.io/9367036/wd1.png"
						class="layer depth-4"
					/>
					<img
						src="https://assets.codepen.io/9367036/wd2.png"
						class="layer depth-3"
					/>
					<img
						src="https://assets.codepen.io/9367036/wd3.png"
						class="layer depth-2"
					/>
					<img
						src="https://assets.codepen.io/9367036/wd4.png"
						class="layer depth-1"
					/>
				</div>
			</div>`
	}

	static styles = css`
		@charset "UTF-8";
		.depth-1 {
			transform: translateZ(0px) scale(1);
			-webkit-animation: depth-anim-1 5s alternate infinite;
			animation: depth-anim-1 5s alternate infinite;
		}
		@keyframes depth-anim-1 {
			from {
				transform: translateZ(0px) scale(1);
			}
			to {
				transform: translateZ(300px) scale(1);
			}
		}

		.depth-2 {
			transform: translateZ(-200px) scale(1.3076923077);
			-webkit-animation: depth-anim-2 5s alternate infinite;
			animation: depth-anim-2 5s alternate infinite;
		}
		@keyframes depth-anim-2 {
			from {
				transform: translateZ(-200px) scale(1.3076923077);
			}
			to {
				transform: translateZ(-50px) scale(1.3076923077);
			}
		}

		.depth-3 {
			transform: translateZ(-400px) scale(1.6153846154);
			-webkit-animation: depth-anim-3 5s alternate infinite;
			animation: depth-anim-3 5s alternate infinite;
		}
		@-webkit-keyframes depth-anim-3 {
			from {
				transform: translateZ(-400px) scale(1.6153846154);
			}
			to {
				transform: translateZ(-300px) scale(1.6153846154);
			}
		}

		.depth-4 {
			transform: translateZ(-600px) scale(1.9230769231);
			-webkit-animation: depth-anim-4 5s alternate infinite;
			animation: depth-anim-4 5s alternate infinite;
		}
		@keyframes depth-anim-4 {
			from {
				transform: translateZ(-600px) scale(1.9230769231);
			}
			to {
				transform: translateZ(-525px) scale(1.9230769231);
			}
		}
		* {
			box-sizing: border-box;
		}

		html,
		body {
			height: 100%;
			margin: 0;
			background: #1f2128;
		}

		body {
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}

		.multiplane {
			position: relative;
			width: 100vw;
			aspect-ratio: 4/3;
			perspective: 650px;
			overflow: hidden;
			transition: perspective 0.3s;
		}
		.is-angle .multiplane {
			overflow: visible;
		}
		.has-no-perspective .multiplane {
			perspective: 0;
		}

		.wrapper {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transform: translate3d(0, 0, 0) rotateY(0deg);
			transition: transform 0.3s;
			transform-style: preserve-3d;
		}
		.is-angle .wrapper {
			transform: translate3d(50%, 0, -800px) rotateY(45deg);
		}

		.layer {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			transform-style: preserve-3d;
		}
	`
}
