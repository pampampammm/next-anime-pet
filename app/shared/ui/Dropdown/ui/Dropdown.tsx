import { useEffect, useMemo, useRef, useState } from 'react'

import useOutsideClick from '@/app/shared/hooks/useOutsideClick/useOusideClick'
import { Button } from '@/app/shared/ui/Button/Button'
import classNames from 'classnames'

import styles from './Dropdown.module.scss'
import { string } from 'prop-types'
import { MaterialIcon } from '@/app/shared/ui/Icon/Icon'
import { MaterialIconName } from '@/app/shared/icons/icons'
import { AnimatePresence, motion } from 'framer-motion'

export enum DropDownTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_INVERTED = 'outlineInverted',
	BACKGROUND = 'background',
}

export enum DropdownSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

export interface ListItem<T> {
	id?: number | string
	label: string
	value: T
	color?: string
}

export interface IPropsDropdownList<T> {
	items: ListItem<T>[]
	icon?: MaterialIconName
	className?: string
	onChange?: (value: ListItem<T>) => void
}

const Dropdown = <T,>(props: IPropsDropdownList<T>) => {
	const { className, items, onChange, icon } = props

	const [panelItems, setPanelItems] = useState<ListItem<T>[]>([])
	const [panelItem, setPanelItem] = useState<ListItem<T>>()
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const buttonRef = useRef<HTMLButtonElement>(null)
	const dropDownRef = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (items) {
			setPanelItems(items)
		}
	}, [items])

	const onClose = () => {
		console.log('asddas')
		setIsOpen(false)
	}

	useOutsideClick({
		elementRef: buttonRef,
		triggerRef: dropDownRef,
		onOutsideClick: () => setIsOpen(false),
		enabled: isOpen,
	})

	const onClickHandler = () => {
		setIsOpen((prevState) => !prevState)
	}

	const onItemClick = (item: ListItem<T>) => {
		if (onChange) {
			onChange(item)
		}

		setPanelItem(item)
	}

	const [title, itemsToRender] = useMemo(() => {
		const titleToShow = panelItem ? panelItem.label : 'Change...'

		const renderItems = () =>
			panelItems.map((item) => (
				// eslint-disable-next-line max-len
				// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
				<li
					key={item.id}
					className={styles.listItem}
					onClick={() => onItemClick(item)}
				>
					{item?.label}
				</li>
			))

		return [titleToShow, renderItems]
	}, [panelItems, panelItem])

	return (
		<Button
			className={classNames(styles.dropdown, [className])}
			myRef={buttonRef}
			onClick={() => onClickHandler()}
		>
			<div className={styles.textContent}>
				{icon && <MaterialIcon name={icon} />}
				<span>{title}</span>
				<MaterialIcon name={'MdArrowDropDown'} />
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.ul
						ref={dropDownRef}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className={styles.list}
					>
						{itemsToRender()}
					</motion.ul>
				)}
			</AnimatePresence>
		</Button>
	)
}

export default Dropdown
