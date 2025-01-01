
import yaml from 'js-yaml';

export interface Post {
	data: string;
	sequencial: string | undefined;
}

export interface Profile {
	id: string;
	description: string;
	feed: Post[];
}

export class ProfileManager {
	private profiles: Profile[] = [];

	private async loadData() {
		const response = await fetch('../profiles/data.yaml', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});
		const dataTxt = await response.text();
		const dataYaml = yaml.load(dataTxt);

		(dataYaml as { pessoas: Profile[]}).pessoas.forEach((pessoa: Profile) => {
			this.profiles.push(pessoa);
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