import yaml from 'js-yaml'

import { RECs25 } from '../types/recs25-type'
import { SocialMedia } from '../types/social-media-type'
import { Profile } from '../types/profile-type'
import { Asset } from '../types/asset'

export class ProfileClass {
	private static profiles: Profile[]

	private static assets: Asset[]

	private constructor() {}

	private static async loadData() {
		if (this.profiles != undefined) {
			return
		}

		this.profiles = await this.loadDataByCategory<Profile[]>('profiles')
		this.assets = await this.loadDataByCategory<Asset[]>('assets')
		const recs25 = await this.loadDataByCategory<RECs25[]>('recs25')
		const socialMedia = await this.loadDataByCategory<SocialMedia[]>(
			'social-media'
		)

		this.profiles.forEach(async (profile: Profile) => {
			profile.hidden =
				profile.hidden === undefined ? false : profile.hidden
			profile.bannered =
				profile.bannered === undefined ? true : profile.bannered

			profile.recs25 = this.gerarRECs25(profile, recs25)
			profile.socialMedia = this.gerarSocialMedia(profile, socialMedia)
			profile.nudometro = this.calcularNudometro(profile)

			if (profile.bannered) {
				profile.bannerSrc = `/data/Profile/@${profile.id} banner.png`
				profile.iconSrc = `/data/Profile/@${profile.id} icon.jpg`
			} else {
				profile.bannerSrc = `/data/Profile/default banner.png`
				profile.iconSrc = `/data/Profile/default icon.jpg`
			}
		})

		this.assets.map((asset: Asset) => {
			asset.show = asset.show === undefined ? false : asset.show
			asset.selector =
				asset.selector === undefined ? asset.id : asset.selector
		})
	}

	private static async loadDataByCategory<T>(category: string) {
		const response = await fetch(`/data/${category}.yaml`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
		const dataTxt = await response.text()
		return yaml.load(dataTxt) as T
	}

	private static gerarRECs25(profile: Profile, recs25: RECs25[]): RECs25[] {
		return recs25
			.filter((rc: RECs25) => rc.profile === profile.id)
			.flatMap((rc: RECs25) => {
				return Array.from({ length: 3 }, (_, index) => {
					const newRc = { ...rc }
					newRc.assetSrc = `/data/RECs25/Hot/RECs25-${rc.id
						?.toString()
						.padStart(2, '0')} Clipe-${rc.clipe
						.toString()
						.padStart(2, '0')} Hot-0${index + 1}.png`
					return newRc
				})
			})
	}

	private static gerarSocialMedia(
		profile: Profile,
		socialMedia: SocialMedia[]
	): SocialMedia[] {
		return socialMedia
			.filter((sm: SocialMedia) => sm.profile === profile.id)
			.map((sm: SocialMedia) => {
				sm.assetSrc = `/data/Social Media/@${sm.profile}/@${
					sm.profile
				} feed-${
					sm.sequencial ? sm.data + '-' + sm.sequencial : sm.data
				}.jpg`
				return sm
			})
	}

	private static calcularNudometro(profile: Profile) {
		const nudometroIndexes: Array<number> = profile.recs25
			.filter((rc: RECs25) => rc.profile === profile.id)
			.map((rc: RECs25) => {
				return rc.nudometro ?? 0
			})
		return nudometroIndexes.length > 0 ? Math.max(...nudometroIndexes) : 0
	}

	public static async getProfiles(): Promise<Profile[]> {
		await this.loadData()
		return this.profiles
	}

	public static async getProfileById(
		id: string
	): Promise<Profile | undefined> {
		await this.loadData()
		return this.profiles.find((profile) => profile.id === id)
	}

	public static async getAssets(): Promise<Asset[]> {
		await this.loadData()
		return this.assets
	}
}
