import { MaterialIconName } from '@/app/shared/icons/icons'
import { AppPaths, AppRoutes } from '@/app/shared/config/pathsConfig'

export interface INavigationItem {
	icon?: MaterialIconName
	title?: string
	link?: string
}

export interface INavigationMenu {
	title?: string
	items?: INavigationItem[]
}

export const navigationInitialState: INavigationMenu = {
	title: 'ONIME',
	items: [
		{
			icon: 'MdAddHomeWork',
			title: 'Home',
			link: AppPaths.home,
		},
		{
			icon: 'MdSave',
			title: 'Project',
			link: AppPaths.project,
		},
		{
			icon: 'MdSave',
			title: 'Discover',
			link: AppPaths.discover,
		},
	],
}

export const navigationGeneralInitialState: INavigationMenu = {
	title: '',
	items: [
		{
			icon: 'MdLogin',
			title: 'Login',
			link: AppPaths.home,
		},
	],
}
