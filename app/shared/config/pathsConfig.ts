export enum AppRoutes {
	HOME = 'home',
	PROJECT = 'project',
	FAVORITES = 'favorites',
}

export const AppPaths: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/pages/home',
	[AppRoutes.PROJECT]: '/pages/project',
	[AppRoutes.FAVORITES]: '/pages/favorites',
}
