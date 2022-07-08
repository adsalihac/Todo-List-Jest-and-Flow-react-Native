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
  onChangeData ?: (value: Array<Object>) => void,
|};

const TodoList = ({data , onChangeData}: PropsType): Node => {
  
  const handleDelete = (item: Object) => {
    const filterdData = data.filter(data => item.id !== data.id);
    onChangeData && onChangeData(filterdData);

  };

  return (
    <View style={{flex: 1, margin: 10}}>
      <FlatList
        data={data}
        ListEmptyComponent={<Text>No data</Text>}
        renderItem={({item}) => (
          <TodoListCard name={item.name} onPress={() => handleDelete(item)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
