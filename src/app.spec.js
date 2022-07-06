import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import App from './app'

const renderApp = () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    return renderer.getRenderOutput()
    }