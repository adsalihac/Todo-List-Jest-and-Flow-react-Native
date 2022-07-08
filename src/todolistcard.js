// @flow

import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import Button from './button'

import type { Node } from 'react'

import type {
    TextStyleProp,
    ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet'

export type PropsType = {|
        onPress ? : () => Promise < void> | void,
        name? : string,
        id? : number,
|};

const TodoListCard = (
    { name , id , onPress}: PropsType
): Node => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}>{name}</Text>
            <Button
            title="Delete"
            onPress={onPress}
            tilteStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "red", width: 80, height: 40, borderRadius: 5, justifyContent: "center", alignItems: "center",  }}
          />
        </View>
    )
}

export default TodoListCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  justifyContent:'space-between', height: 40, backgroundColor: "blue", marginBottom: 10, alignItems: 'center', borderRadius: 5,  paddingLeft:10
    },
})