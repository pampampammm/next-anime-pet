import React from 'react'

import NavigationMenu from '../NavigationMenu/NavigationMenu'
import NavigationCategoryMenu from '../NavigationCategoryMenu/NavigationCategoryMenu'
import {
	navigationGeneralInitialState,
	navigationInitialState,
} from '../../model/types/types'

import styles from './Navigation.module.scss'
import { SearchField } from '@/app/feature/searchTitleByField'

const Navigation = () => {
	return (
		<header className={styles.navigation}>
			<NavigationMenu menu={navigationInitialState} />
			<SearchField />
			{/*<NavigationCategoryMenu />*/}
		</header>
	)
}

export default Navigation
