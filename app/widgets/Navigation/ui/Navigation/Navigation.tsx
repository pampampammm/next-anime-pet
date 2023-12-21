import React from 'react'

import { SearchField } from '@/app/feature/searchTitleByField'

import NavigationMenu from '../NavigationMenu/NavigationMenu'
import { navigationInitialState } from '../../model/types/types'
import UserLoginForm from '@/app/entity/User/ui/UserLoginForm'

import styles from './Navigation.module.scss'

const Navigation = () => {
	return (
		<header className={styles.navigation}>
			<NavigationMenu menu={navigationInitialState} />
			<SearchField />
			{/*<UserLoginForm />*/}
			{/*<NavigationCategoryMenu />*/}
		</header>
	)
}

export default Navigation
