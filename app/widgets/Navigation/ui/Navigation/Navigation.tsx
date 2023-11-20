import React from 'react'

import NavigationMenu from '../NavigationMenu/NavigationMenu'
import NavigationCategoryMenu from '../NavigationCategoryMenu/NavigationCategoryMenu'
import {
	navigationGeneralInitialState,
	navigationInitialState,
} from '../../model/types/types'

import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<header className={styles.navigation}>
			<NavigationMenu menu={navigationInitialState} />
			<NavigationCategoryMenu />
		</header>
	)
}

export default Navigation
