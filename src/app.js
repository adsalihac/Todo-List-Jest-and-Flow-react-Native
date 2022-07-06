// @flow

import { Text, View } from 'react-native'
import React, { Component } from 'react'

import type {Node} from 'react'

type PropsType = {||};

type StateType = {
    name: string
};

class App extends Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props);
        this.state = {
            name: 'John'
        };
    }

  render() : Node {
    return (
      <View style={{flex:1 , backgroundColor:"red"}}>
        <Text>App</Text>
      </View>
    )
  }
}

export default App