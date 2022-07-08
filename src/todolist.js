// @flow

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import type {Node} from 'react';
import TodoListCard from './todolistcard';

import type {
  TextStyleProp,
  ViewStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type PropsType = {|
  data: Array<Object>,
  onChangeData?: (value: Array<Object>) => void,
|};

const TodoList = ({data, onChangeData}: PropsType): Node => {
  const handleDelete = (deleteIndex: number) => {
    const filterdData = data.filter((data, index) => index !== deleteIndex);
    onChangeData && onChangeData(filterdData);
  };

  return (
    <View style={{flex: 1, margin: 10}}>
      <FlatList
        data={data}
        ListEmptyComponent={<Text>No data</Text>}
        renderItem={({item, index}) => (
          <TodoListCard name={item.name} onPress={() => handleDelete(index)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
