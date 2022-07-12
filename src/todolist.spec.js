// @flow

import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import {
  findAllWithType,
  findWithType,
  isComponentOfType,
} from 'react-shallow-testutils';
import TodoList from './todolist';
import TodoListCard from './todolistcard';
import type { PropsType } from './todolist';

const renderer = new ShallowRenderer();

const renderTodoList = ({ data, onChangeData }: PropsType = {}) => {
  renderer.render(<TodoList data={data} onChangeData={onChangeData} />);
  return renderer.getRenderOutput();
};



const mockDataTodos = [
  {
    id: 'id-1',
    name: 'Todo-1',
  },
  {
    id: 'id-2',
    name: 'Todo-2',
  },
  {
    id: 'id-3',
    name: 'Todo-3',
  },
];


describe('todolist component', () => {

  it('renders correctly', () => {
    const result = renderTodoList();
    expect(result).toMatchSnapshot();
  });

  it('renders a flatlist', () => {
    const result = renderTodoList();
    const flatlist = findAllWithType(result, FlatList);
    expect(flatlist.length).toBe(1);
  });

  it('renders a flatlist with data', () => {

    const result = renderTodoList({ data: mockDataTodos, onChangeData: jest.fn() });
    const flatlist = findWithType(result, FlatList);
    expect(flatlist.props.data).toEqual(mockDataTodos);


    const renderItem = flatlist.props.renderItem;

    const renderItemResult = renderItem({
      item: mockDataTodos[0],
      index: 0,
    });
    renderItemResult.props.onPress();

    // const button = findWithType(result, Button);
    // button.props.onPress();

  }
  );

  it('renders a flatlist with no data', () => {
    const result = renderTodoList({ data: [] });

    const flatlist = findWithType(result, FlatList);
    expect(flatlist.props.data.length).toBe(0);

    const noData = findAllWithType(result, Text);
    console.log("🚀 ~ file: todolist.spec.js ~ line 84 ~ it ~ noData", noData)
    // console.log("🚀 ~ file: todolist.spec.js ~ line 81 ~ it ~ noData", noData)
    // expect(noData.props.children).toBe('No todos');

  });



  it('should flatlist return keyExtractor correctly', () => {
    const result = renderTodoList();
    const flatlist = findWithType(result, FlatList);
    const key = flatlist.props.keyExtractor({ id: 1 });
    expect(key).toBe('1');
  });


});
