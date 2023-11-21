export enum AppRoutes {
	HOME = 'home',
	PROJECT = 'project',
	DISCOVER = 'discover',
}

export const AppPaths: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/pages/home',
	[AppRoutes.PROJECT]: '/pages/project',
	[AppRoutes.DISCOVER]: '/pages/discover',
}
