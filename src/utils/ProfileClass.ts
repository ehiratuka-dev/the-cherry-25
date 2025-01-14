import yaml from 'js-yaml';

import { RECs25 } from "../types/recs25-type";
import { SocialMedia } from "../types/social-media-type";
import { Profile } from "../types/profile-type";

export class ProfileClass {
	private static profiles: Profile[];

	private constructor() {
	}

	private static async loadData() {
		if (this.profiles != undefined) {
			return;
		}

		this.profiles = await this.loadDataByCategory<Profile[]>('profiles');
		const recs25 = await this.loadDataByCategory<RECs25[]>('recs25');
		const socialMedia = await this.loadDataByCategory<SocialMedia[]>('social-media');

		this.profiles.forEach(async (pessoa: Profile) => {
			pessoa.hidden = pessoa.hidden === undefined ? false : pessoa.hidden;
			pessoa.bannered = pessoa.bannered === undefined ? true : pessoa.bannered;

			pessoa.recs25 = this.gerarRECs25(pessoa, recs25);
			pessoa.socialMedia = this.gerarSocialMedia(pessoa, socialMedia);
			pessoa.nudometro = this.calcularNudometro(pessoa);

			if (pessoa.bannered) {
				pessoa.bannerSrc = `../data/Profile/@${pessoa.id} banner.png`
				pessoa.iconSrc = `../data/Profile/@${pessoa.id} icon.jpg`
			} else {
				pessoa.bannerSrc = `../data/Profile/default banner.png`
				pessoa.iconSrc = `../data/Profile/default icon.jpg`
			}
		});
	}

	private static async loadDataByCategory<T>(category: string) {
		const response = await fetch(`../data/${category}.yaml`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});
		const dataTxt = await response.text();
		return yaml.load(dataTxt) as T;
	}

	private static gerarRECs25(pessoa: Profile, recs25: RECs25[]): RECs25[] {
		return recs25
			.filter((rc: RECs25) => rc.profile === pessoa.id)
			.flatMap((rc: RECs25) => {
				return Array.from({ length: 3 }, (_, index) => {
					const newRc = { ...rc };
					newRc.assetSrc = `../data/RECs25/Hot/RECs25-${rc.id?.toString().padStart(2, '0')} Clipe-${(rc.clipe).toString().padStart(2, '0')} Hot-0${index + 1}.png`;
					return newRc;
				});
			});
	}

	private static gerarSocialMedia(pessoa: Profile, socialMedia: SocialMedia[]): SocialMedia[] {
		return socialMedia
			.filter((sm: SocialMedia) => sm.profile === pessoa.id)
			.map((sm: SocialMedia) => {
				sm.assetSrc = `../data/Social Media/@${sm.profile}/@${sm.profile} feed-${sm.sequencial ? sm.data + '-' + sm.sequencial : sm.data}.jpg`;
				return sm;
			}
			);
	}

	private static calcularNudometro(pessoa: Profile) {
		const nudometroIndexes: Array<number> = pessoa.recs25
			.filter((rc: RECs25) => rc.profile === pessoa.id)
			.map((rc: RECs25) => {
				return rc.nudometro ?? 0
			});
		return nudometroIndexes.length > 0 ? Math.max(...nudometroIndexes) : 0;
	}

	public static async getProfiles(): Promise<Profile[]> {
		await this.loadData();
		return this.profiles;
	}

	public static async getProfileById(id: string): Promise<Profile | undefined> {
		await this.loadData();
		return this.profiles.find(profile => profile.id === id);
	}
}