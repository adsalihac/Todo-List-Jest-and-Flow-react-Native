// @flow

import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import ShallowRenderer from 'react-test-renderer/shallow';
import { findAllWithType, findWithType } from 'react-shallow-testutils'

import Button from './button'

let tilte: string, onPress: () => void;

const renderer = new ShallowRenderer();

const renderButton = () => {
  renderer.render(<Button title={tilte} onPress={onPress} />);
  return renderer.getRenderOutput();
};

describe('button component', () => {
  beforeEach(() => {
    tilte = 'Click';
    onPress = jest.fn();
  });

  it('renders correctly', () => {
    const result = renderButton();
    expect(result).toMatchSnapshot();
  });

  it('renders a TouchableOpacity', () => {
    const result = renderButton();
    expect(findWithType(result, TouchableOpacity)).toBeTruthy();
  }
  );

  it('renders a Text', () => {
    const result = renderButton();
    expect(findWithType(result, Text)).toBeTruthy();
  }
  );

  it('calls onPress when pressed', () => {
    const result = renderButton();
    const button = findWithType(result, TouchableOpacity);
    // console.log("Butoon" , button);
    button.props.onPress();
    expect(typeof onPress).toBe('function');
    expect(button.props.onPress.mock.calls.length).toBe(1);
    // expect(mock(button.props.onPress).mock.calls.length).toBe(1);
    // console.log("Mock", button.props.onPress.mock.calls.length);
  }
  );

  it('renders a Text with the title', () => {
    const result = renderButton();
    expect(findWithType(result, Text).props.children).toEqual(tilte);
  });

  it('renders custom style correctly', () => {
    const style = { backgroundColor: 'red' };
    const titleStyle = { color: 'red' };

    renderer.render(<Button title={tilte} onPress={onPress} style={style} tilteStyle={titleStyle} />);

    const result = renderer.getRenderOutput();
    const button = findWithType(result, TouchableOpacity);
    const text = findWithType(result, Text);

    expect(button.props.style[1]).toBe(style);
    expect(text.props.style[1]).toBe(titleStyle);
    // console.log("BUTTON STYLE",button.props.style);
    // console.log("TEXT STYLE",text.props.style);
  });
});
