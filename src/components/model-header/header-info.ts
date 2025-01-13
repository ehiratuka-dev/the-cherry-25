import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Profile } from '../../utils/profile-manager';

@customElement('model-header-info')
export class ModelHeaderInfo extends LitElement {
	@property()
	profile: Profile | undefined = undefined;

	render() {
		return this.profile ? html`
			<div class="header-info">
				<img src="../data/Social%20Media/@${ this.profile.id }/@${ this.profile.id } notion-icon.jpg"
				onerror="this.onerror=null; this.src='../data/Social Media/@default/@default notion-icon.jpg';" />
				
				<div class="tags">
					${ this.profile.nome ? html`
						<div class="tag">
							<fa-icon path-prefix="../node_modules" color="var(--primary-color)" class="fas fa-user" size="var(--tamanho-do-subtitulo)"></fa-icon>
							<p>${ this.profile.nome }</p>
						</div>` : nothing }

					${ this.profile.cidade ? html`
						<div class="tag">
							<fa-icon path-prefix="../node_modules" color="var(--primary-color)" class="fas fa-city" size="var(--tamanho-do-subtitulo)"></fa-icon>
							<p>${ this.profile.cidade }</p>
						</div>` : nothing }

					${ this.profile.instagram ? html`
						<div class="tag">
							<fa-icon path-prefix="../node_modules" color="var(--primary-color)" class="fab fa-instagram" size="var(--tamanho-do-subtitulo)"></fa-icon>
							<p>${ this.profile.instagram }</p>
						</div>` : nothing }
				</div>
				
			</div>` : nothing;
	}

	static styles = css`

		.header-info {
			display: flex;
			position: relative;
			margin-top: min(calc(-20% / 2), calc(-120px / 2));
			padding: 0 var(--espacamento);
			margin-bottom: var(--espacamento);
		}

		.header-info img {
			border: 2px solid var(--primary-text-color);

			min-width: 120px;
			width: 20%;
			border-radius: 100%;
		}
		
		.header-info .tags {
			width: calc(1080px - 20%);
			padding: 0 0 0 var(--espacamento);
			align-self: flex-end;

			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 6px;
			align-content: stretch;
			align-items: center;
		}

		.tags .tag {
			background-color: var(--container-color);
			border-radius: var(--borda-arredondada);
			padding: 6px var(--espacamento);

			display: flex;
			align-items: center;
		}

		.tag p {
			margin: 0 0 0 var(--espacamento);
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}`
}
