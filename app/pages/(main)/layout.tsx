import type { PropsWithChildren } from 'react'

import { Navigation } from '@/app/widgets/Navigation'

import styles from './Layout.module.scss'
import { PageHeader } from '@/app/widgets/PageHeader'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Navigation />
			<div className={styles.content}>{children}</div>
		</div>
	)
}
