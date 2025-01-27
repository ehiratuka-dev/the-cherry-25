import yaml from 'js-yaml'

import { RECs25 } from '../types/recs25-type'
import { SocialMedia } from '../types/social-media-type'
import { Profile } from '../types/profile-type'
import { Category } from '../types/category'
import { RECs } from '../types/recs-type'

export class ProfileClass {
	private static profiles: Profile[]

	private static categories: Category[]

	private constructor() {}

	private static async loadData() {
		if (this.profiles != undefined) {
			return
		}

		this.profiles = await this.loadDataByCategory<Profile[]>('profiles')
		this.categories =
			await this.loadDataByCategory<Category[]>('categories')

		const recs25 = await this.loadDataByCategory<RECs25[]>('recs25')
		const recs = await this.loadDataByCategory<RECs[]>('recs')
		const socialMedia =
			await this.loadDataByCategory<SocialMedia[]>('social-media')

		this.profiles.forEach(async (profile: Profile) => {
			profile.hidden =
				profile.hidden === undefined ? false : profile.hidden
			profile.bannered =
				profile.bannered === undefined ? true : profile.bannered

			profile.recs25 = this.gerarRECs25(profile, recs25)
			profile.recs = this.gerarRECs(profile, recs)
			profile.socialMedia = this.gerarSocialMedia(profile, socialMedia)
			profile.nudometro = this.calcularNudometro(profile)

			if (profile.bannered) {
				profile.bannerSrc = `/data/Profile/${profile.id} banner.png`
				profile.iconSrc = `/data/Profile/${profile.id} icon.png`
			} else {
				profile.bannerSrc = `/data/Profile/default banner.png`
				profile.iconSrc = `/data/Profile/default icon.png`
			}
		})

		this.categories.map((category: Category) => {
			category.show = category.show === undefined ? false : category.show
			category.selector =
				category.selector === undefined
					? category.id
					: category.selector
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
					newRc.assetSrc = `/data/02-recs25/04-hots/recs25${rc.id
						?.toString()
						.padStart(2, '0')}-clipe${rc.clipe
						.toString()
						.padStart(2, '0')}-hot0${index + 1}.jpg`
					return newRc
				})
			})
	}

	private static gerarRECs(profile: Profile, recs: RECs[]): RECs[] {
		return recs
			.filter((rc: RECs) => rc.profile === profile.id)
			.flatMap((rc: RECs) => {
				return Array.from({ length: 3 }, (_, index) => {
					const newRc = { ...rc }
					newRc.assetSrc = `/data/01-recs/04-hots/recs${rc.id
						?.toString()
						.padStart(2, '0')}-clipe${rc.clipe
						.toString()
						.padStart(2, '0')}-hot0${index + 1}.jpg`
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

	public static getCategories(): Category[] {
		return this.categories
	}
}
