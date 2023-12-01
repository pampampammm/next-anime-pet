import MainProviders from '@/app/providers/MainProviders/MainProviders'

import '@/app/styles/variables/globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <MainProviders>{children}</MainProviders>
}
