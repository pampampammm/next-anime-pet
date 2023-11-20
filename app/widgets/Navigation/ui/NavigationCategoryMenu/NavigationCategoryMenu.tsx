'use client'

import React from 'react'

import { useCategories } from '../../model/service/useCategories/useCategories'
import { INavigationItem } from '../../model/types/types'
import NavigationMenu from '@/app/widgets/Navigation/ui/NavigationMenu/NavigationMenu'

const NavigationCategoryMenu = () => {
	const { data, error, isLoading } = useCategories()

	return (
		<NavigationMenu
			menu={{
				title: '',
				items: data || [],
			}}
		/>
	)
}

export default NavigationCategoryMenu
