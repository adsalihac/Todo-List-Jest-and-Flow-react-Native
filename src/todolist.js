// @flow

import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import type { Node } from 'react'

import TodoListCard from './todolistcard'

import type {
    TextStyleProp,
    ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet'

export type PropsType = {|
    data: Array <Object>,
|};

const TodoList = (
    { data }: PropsType
): Node => {

    return (
        <View style={{flex:1,  margin : 10}}>
            <FlatList 
                data={data}
                ListEmptyComponent={
                    <Text>No data</Text>
                }
                renderItem={({item}) => 
                  <TodoListCard name={item.name} / >
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default TodoList

