import React, { FC } from 'react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { INavigationItem } from '../../model/types/types'

import classNames from 'classnames'
import styles from './NavigationItem.module.scss'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'

const NavigationItem: FC<{ item: INavigationItem }> = ({ item }) => {
	const { link, icon, title } = item
	const path = usePathname()

	const mods: Record<string, boolean> = {
		[styles.active]: path === item.link,
	}

	const hrefLink = link ? link : 'pages/home'

	return (
		<Link className={classNames(styles.link, mods)} href={hrefLink}>
			{icon && <MaterialIcon name={icon} />}
			<span>{title}</span>
		</Link>
	)
}

export default NavigationItem
