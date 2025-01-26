import { Category } from '../../types/category'

export class CategoryFilterChangedEvent extends Event {
	category: Category

	constructor(category: Category) {
		super('categoryFilterChanged')
		this.category = category
	}
}
