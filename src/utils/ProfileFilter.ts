import { Profile } from '../types/profile-type'
import { Category } from '../types/category'

export class ProfileFilter {
	public async filter(
		profiles: Profile[] | undefined,
		selectedCategories: Category[]
	): Promise<Profile[] | undefined> {
		return profiles?.filter((profile: Profile) => {
			return selectedCategories.some((category: Category) => {
				if (category.id === 'recs25') {
					return profile.recs25.length > 0
				}
				if (category.id === 'social-media') {
					return profile.socialMedia.length > 0
				}
				return false
			})
		})
	}
}
