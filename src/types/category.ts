import { COLORS } from '../components/buttons/base-button'

export interface Category {
	id: string
	name: string
	icon: string
	color: COLORS
	selector: string | undefined
	show: boolean
}
