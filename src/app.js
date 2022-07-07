// @flow

import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Button from './button'
import Input from './input'

import type {Node} from 'react'

type PropsType = {||};

type StateType = {
    data : Array<Object>,
    text : string,
};

class App extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
          data: [{},{}],
          text: '',
        };
    }

  render() : Node {
    return (
      <View style={{flex:1 , backgroundColor:"white"}}>
        <View style={{flexDirection:'row' , alignItems:'center'}}>
          <Input
            placeholder={"Enter task"}
            value={this.state.text}
            onChangeText={(text) => this.setState({text : text})}
          />
          <Button
          title="Click"
          onPress={() => {
            console.log("Button Clicked");
          }}
          tilteStyle={{ fontSize : 14}}
          style={{backgroundColor:"blue", width:80, height:40 , borderRadius: 5, justifyContent:"center", alignItems:"center" , marginRight:5}}
        />
        </View>
      </View>
    )
  }
}

export default App