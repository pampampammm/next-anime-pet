export enum AppRoutes {
	HOME = 'home',
	CATALOG = 'catalog',
}

export const AppPaths: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.CATALOG]: '/catalog',
}
