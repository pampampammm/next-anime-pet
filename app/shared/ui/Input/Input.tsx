'use client'

import React, {
	forwardRef,
	InputHTMLAttributes,
	memo,
	RefObject,
	useEffect,
	useRef,
} from 'react'

import classNames from 'classnames'
import styles from './Input.module.scss'
import { MaterialIconName } from '@/app/shared/icons/icons'

export enum InputTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_INVERTED = 'outlineInverted',
	BACKGROUND = 'background',
}

export enum InputSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	name?: string
	type?: string
	inputSize?: InputSize
	theme?: InputTheme
	icon?: MaterialIconName
	myRef?: RefObject<HTMLInputElement>
}

// eslint-disable-next-line react/display-name
const InputField = (props: InputProps) => {
	const {
		className,
		id,
		type,
		name,
		placeholder,
		autoFocus,
		theme = InputTheme.BACKGROUND,
		inputSize = InputSize.XL,
		disabled = false,
		icon = 'SearchField',
		myRef,
		...rest
	} = props

	const mods: Record<string, string | boolean> = {
		[styles[theme]]: true,
		[styles[inputSize]]: true,
		[styles.disabled]: disabled,
	}

	return (
		<input
			className={classNames(styles.input, mods, className)}
			name={name}
			id={id}
			type={type}
			placeholder={placeholder}
			disabled={disabled}
			ref={myRef}
			{...rest}
		/>
	)
}

const Input = memo(InputField)
export default Input
