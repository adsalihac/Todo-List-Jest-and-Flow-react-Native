// @flow

import { Text, View } from 'react-native'
import React, { Component } from 'react'

import type {Node} from 'react'

type PropsType = {||};

type StateType = {
    data : Array<Object>
};

class App extends Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props);
        this.state = {
          data: [{},{}]
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