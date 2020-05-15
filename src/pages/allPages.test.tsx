import React from 'react'
import { render } from '@testing-library/react'

import IndexPage from './index'

describe('all pages should load', () => {
    test('component: IndexPage', () => {
        render(<IndexPage />)
    })

    // test('ErrorPage', () => {
    //     render(<ErrorPage />)
    // })
})
