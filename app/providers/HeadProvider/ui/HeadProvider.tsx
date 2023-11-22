import { FC, ReactNode } from 'react'
import NextProgressBar from 'nextjs-progressbar'

interface ProviderProps {
	children: ReactNode
}

const HeadProvider: FC<ProviderProps> = ({ children }) => {
	return (
		<>
			<NextProgressBar startPosition={0.3} height={3} stopDelayMs={3} />
			{children}
		</>
	)
}

export default HeadProvider
