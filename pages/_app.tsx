import React from 'react'

import { Hydrate } from 'react-query'

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import RootLayout from './layout'

import '../app/styles/variables/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<Hydrate state={pageProps.dehydratedState}>
				<main className={inter.className}>
					<Component {...pageProps} />
				</main>
			</Hydrate>
		</RootLayout>
	)
}
