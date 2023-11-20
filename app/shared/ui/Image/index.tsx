import Image, { ImageProps } from 'next/image'

import { motion } from 'framer-motion'

type Props = {} & ImageProps

const MotionImage = motion<Props>(Image)

export { MotionImage as Image }
