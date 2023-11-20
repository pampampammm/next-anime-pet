'use client'

import React from 'react'

import NavigationItem from '../NavigationItem/NavigationItem'
import { INavigationMenu } from '../../model/types/types'

import styles from './NavifationMenu.module.scss'

interface MenuProps {
	menu: INavigationMenu
}

const NavigationMenu = (props: MenuProps) => {
	const { menu } = props

	return (
		<div className={styles.menu}>
			<h1>{menu.title}</h1>
			<ul className={styles.list}>
				{menu.items?.map((value) => (
					<li key={value.link}>
						<NavigationItem item={value} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default NavigationMenu
