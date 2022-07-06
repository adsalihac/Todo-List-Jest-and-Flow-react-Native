// @flow


import React from 'react'
import {StyleSheet, Text , TouchableHighlight, TouchableOpacity, View} from 'react-native'

import type {Node} from 'react'

import type {
    TextStyleProp,
    ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet'

type PropsType = {|
    title : string,
    tilteStyle? : TextStyleProp,
    onPress? : () => Promise<void> | void,
    style? : ViewStyleProp,
|};

const Button = ({title, tilteStyle, onPress,style} : PropsType) : Node => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
        >
            <Text style={[styles.title, tilteStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button : {
        backgroundColor : 'red',
    },
    title : {
        color :"white",
    }
})