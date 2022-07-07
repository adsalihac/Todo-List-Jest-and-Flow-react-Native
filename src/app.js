// @flow

import { Text, View , Alert} from 'react-native'
import React, { Component } from 'react'
import Button from './button'
import Input from './input'
import TodoList from './todolist'

import type { Node } from 'react'
import { types } from '@babel/core'

// type ConnectPropsType = {
//   addItem: () => Promise<void>,
// }

type PropsType = {|
  |};

type StateType = {
  data: Array<Object>,
  text: string,
};



class App extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: [{ id: 1, name: 'data1' }, { id: 2, name: 'data2' }, { id: 3, name: 'data3' }],
      text: '',
    };
  }


  setData: (field: string) => (value: string) => void =
    (field: string) => (value: string) => {
      this.setState({ [field]: value });
    }

  addItem: () => void = () => {
    const { data, text }
      = this.state;

    if (text.length) {
      const newData = { id: data.length + 1, name: text };
      this.setState({ data: [...data, newData], text: '' });
      console.log("newData", JSON.stringify(this.state.data));
    } else {
     Alert.alert("Alert", "Enter input", [{ text: "OK" }], {
      cancelable: true,
    });
   
    }
  }

  render(): Node {

    const {
      addItem,
      setData,
      state: { data, text }
    } = this;


    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Input
            placeholder={"Enter task"}
            value={text}
            onChangeText={setData('text')}
          />

          <Button
            title="Click"
            onPress={addItem}
            tilteStyle={{ fontSize: 14 }}
            style={{ backgroundColor: "blue", width: 80, height: 40, borderRadius: 5, justifyContent: "center", alignItems: "center", marginRight: 5 }}
          />
        </View>

        <TodoList data={data} />
      </View>
    )
  }
}

export default App