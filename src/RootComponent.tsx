import React from 'react'
//import 'normalize.css'
import './index.css'

interface Props {
    children: React.ReactNode
}

const RootComponent: React.FC<Props> = ({ children }) => {
    return <>{children}</>
}

export default RootComponent
