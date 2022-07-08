// @flow

import React from 'react';
import {TextInput} from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import {findAllWithType, findWithType} from 'react-shallow-testutils';
import Input from './input';
import type {PropsType} from './input';

const renderer = new ShallowRenderer();

const renderInput = ({
  onChangeText,
  value,
  placeholder,
  style,
}: PropsType = {}) => {
  renderer.render(
    <Input
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={style}
    />,
  );
  return renderer.getRenderOutput();
};

describe('input component', () => {
  it('renders correctly', () => {
    const result = renderInput();
    expect(result).toMatchSnapshot();
  });

  it('renders correctly with props', () => {
    const props: PropsType = {
      onChangeText: jest.fn(),
      value: 'test',
      placeholder: 'test',
    };
    const result = renderInput(props);
    const input = findWithType(result, TextInput);
    expect(input.props).toMatchObject(props);
  });

  it('render custom style correctly', () => {
    const style = {backgroundColor: 'red'};
    const result = renderInput({style});
    const input = findAllWithType(result, TextInput)[0];
    expect(input.props.style[1]).toMatchObject(style);
    console.log('input.props.style', input.props.style[1]);
    // console.log(" findAllWithType" ,  findAllWithType(result, TextInput)[0]);
  });
});
