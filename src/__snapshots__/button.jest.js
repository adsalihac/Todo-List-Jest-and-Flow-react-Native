import React from 'react';
import {Text, TouchableOpacity} from 'react-native'
import ShallowRenderer from 'react-test-renderer/shallow';
import {findAllWithType, findWithType} from 'react-shallow-testutils'

import Button from './button'


let renderer: ShallowRenderer, tilte : string, onPress : () => void;

const renderButton = () => {
    renderer.render(<App />);
    return renderer.getRenderOutput();
};

describe('button', () => {
    beforeEach(() => {
        tilte = 'Click';
        onPress = jest.fn();
    });

    it('renders correctly', () => {
        renderer.render(<Button title={tilte} onPress={onPress} />);
        const result = renderButton();
        expect(result).toMatchSnapshot();
    }

  it('renders with correct text', () => {
    renderer.render(<Button title={tilte} onPress={onPress} />);
    const result = renderButton();

    const text = findWithType(result, Text);

    expect(result.props.children).toEqual(tilte);
  });


    
});
