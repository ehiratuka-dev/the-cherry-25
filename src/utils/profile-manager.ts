
import yaml from 'js-yaml';
import { RECs25 } from '../types/recs25-type';
import { SocialMedia } from '../types/social-media-type';




export interface Profile {
	id: string;
    nome: string;
    cidade: string;
    instagram: string;
	tags: string[];

	hidden: boolean;
	socialMedia: SocialMedia[]
	recs25: RECs25[]
}

export class ProfileManager {
	private profiles: Profile[] = [];
	private recs25: RECs25[] = [];
	private socialMedia: SocialMedia[] = [];

	private async loadDataByCategory<T>(category: string) {
		const response = await fetch(`../data/${ category }.yaml`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});
		const dataTxt = await response.text();
		return yaml.load(dataTxt) as T;
	}

	private async loadData() {
		this.profiles = await this.loadDataByCategory<Profile[]>('profiles');
		this.recs25 = await this.loadDataByCategory<RECs25[]>('recs25');
		this.socialMedia = await this.loadDataByCategory<SocialMedia[]>('social-media');

		this.profiles.forEach((pessoa: Profile) => {
			pessoa.hidden = pessoa.hidden || false;
			
			pessoa.socialMedia = this.socialMedia.filter(
				(sm: SocialMedia) => sm.profile === pessoa.id).map(
					(sm: SocialMedia) => {
						sm.montarFeedSrc = `../data/Social Media/@${ sm.profile }/@${ sm.profile } feed-${ sm.sequencial ? sm.data + '-' + sm.sequencial : sm.data }.jpg`;
						return sm;
					}
				);
	
			pessoa.recs25 = this.recs25
				.filter((rc: RECs25) => rc.profile === pessoa.id)
				.flatMap((rc: RECs25) => {
					return Array.from({ length: 3 }, (_, index) => {
					  const newRc = { ...rc };
					  newRc.montarFeedSrc = `../data/RECs25/Hot/RECs25-${ rc.id?.toString().padStart(2, '0') } Clipe-${ (rc.clipe).toString().padStart(2, '0') } Hot-0${index + 1}.png`;
					  return newRc;
					});
				  });
		});
	}

	async getProfiles(): Promise<Profile[]> {
		await this.loadData();
		return this.profiles;
	}

	async getProfileById(id: string): Promise<Profile | undefined> {
		await this.loadData();
		return this.profiles.find(profile => profile.id === id);
	}
}