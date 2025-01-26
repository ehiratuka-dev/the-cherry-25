import { Category } from '../../types/category'
import { Profile } from '../../types/profile-type'
import { ProfileClass } from '../../utils/ProfileClass'

export class ProfileListUpdatedEvent extends Event {
	selectedCategories: Array<Category>

	constructor(selectedCategories: Array<Category>) {
		super('profileListUpdated')
		this.selectedCategories = selectedCategories
	}

	public async filterProfiles(profiles: Profile[]): Promise<Profile[]> {
		if (this.selectedCategories.length > 0) {
			return profiles.filter((profile: Profile) => {
				return this.selectedCategories.some((category: Category) => {
					if (category.id === 'recs25') {
						return profile.recs25.length > 0
					}
					if (category.id === 'social-media') {
						return profile.socialMedia.length > 0
					}
					return false
				})
			})
		} else {
			return await ProfileClass.getProfiles()
		}
	}
}
