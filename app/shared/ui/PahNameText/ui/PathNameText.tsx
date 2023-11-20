'use client'

import { usePathname } from "next/navigation"

const PathNameText = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = usePathname()

    return (
        <h1>
            {pathname}
        </h1>
    )
}

export default PathNameText