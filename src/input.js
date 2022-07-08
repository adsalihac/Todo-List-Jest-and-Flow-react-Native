// @flow
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import type {Node} from 'react';
import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type PropsType = {|
  onChangeText?: (text: string) => void,
  value?: string,
  placeholder?: string,
  style?: ViewStyleProp,
|};

const Input = ({onChangeText, value, placeholder, style}: PropsType): Node => {
  return (
    <TextInput
      value={value}
      style={[styles.input, style]}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
