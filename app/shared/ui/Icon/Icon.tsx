import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { MaterialIconName } from '@/app/shared/icons/icons'

export const MaterialIcon: FC<{ name: MaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent />
}
