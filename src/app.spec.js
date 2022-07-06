import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import App from './app'

let renderer: ShallowRenderer;

const renderApp = () => {
    renderer.render(<App />)
    return renderer.getRenderOutput()
}

describe('app', () => {

    beforeEach(() => {
        renderer = new ShallowRenderer()
    });

    it('renders correctly', () => {
        const result = renderApp()
        expect(result).toMatchSnapshot()
    })
});

