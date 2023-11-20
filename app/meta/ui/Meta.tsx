'use client'

import React, { FC, ReactNode } from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { siteTitle, siteTitleMerge } from '../lib/helpers/seoTitle'
import { onlyText } from '@/app/shared/helpers/clearText'

interface ISeo {
	title: string
	description?: string
	children?: ReactNode
}

const Meta: FC<ISeo> = ({ title, description, children }) => {
	const path = usePathname()
	const currentPath = `${path}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{title}</title>
					<meta
						itemProp="3141241"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentPath} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={siteTitleMerge(title)} />
					<meta property="og:url" content={currentPath} />
					<meta property="og:site_name" content={siteTitle} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<meta name={'robots'} content={'noindex, nofollow'} />
			)}
			{children}
		</>
	)
}

export default Meta
