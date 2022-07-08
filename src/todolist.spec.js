// @flow

import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import {
  findAllWithType,
  findWithType,
  isComponentOfType,
} from 'react-shallow-testutils';
import TodoList from './todolist';
import TodoListCard from './todolistcard';
import type {PropsType} from './todolist';

const renderer = new ShallowRenderer();

const renderTodoList = ({data}: PropsType = {}) => {
  renderer.render(<TodoList data={data} />);
  return renderer.getRenderOutput();
};

describe('todolist component', () => {

    it('renders correctly', () => {
        const result = renderTodoList();
        expect(result).toMatchSnapshot();
        console.log("🚀 ~ file: todolist.spec.js ~ line 28 ~ it ~ findWithType(result, FlatList)", findWithType(result, FlatList))
        // expect(findWithType(result, FlatList).props.data).toEqual([
        //   '',
        // ]);
      });
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
    const result = renderTodoList();
    
    const flatlist = findAllWithType(result, FlatList);
    console.log("🚀 ~ file: todolist.spec.js ~ line 47 ~ it ~ flatlist", flatlist)
    // expect(flatlist[0].props.data).toBeUndefined();
    const todos = [{ name: 'taskname' ,  id : 1 }, { name: 'taskname' ,  id : 2 }, { name: 'taskname' ,  id : 3 }];
    // expect(flatlist[0].props.data).toEqual(todos);
    flatlist[0].props.data(todos);

    // expect(flatlist.length).toBe(1);
    // const sections = findWithType(result, FlatList).props.renderItem({
    //   item: 'hello',
    // });
    // console.log(
    //   '🚀 ~ file: todolist.spec.js ~ line 41 ~ sections ~ sections',
    //   sections,
    // );
    // expect(isComponentOfType(sections, FlatList)).toBe(true);
    // expect(isComponentOfType(flatList, TodoListCard)).toBe(true);
  });

  it('renders a flatlist with no data', () => {
    const result = renderTodoList({
      data: [],
    });
    const flatlist = findAllWithType(result, FlatList);
    expect(flatlist.length).toBe(1);
    const todolistcard = findAllWithType(result, TodoListCard);
    console.log('todolistcard', todolistcard);
    expect(todolistcard.length).toBe(0);
  });

  it('should flatlist return keyExtractor correctly', () => {
    const result = renderTodoList();
    const flatlist = findWithType(result, FlatList);
    const key = flatlist.props.keyExtractor({id: 1});
    expect(key).toBe('1');
  });

  // it('should flatlist return keyExtractor correctly', () => {
  //     const key = wrapper
  //                 .find('FlatList')
  //                 .props()
  //                 .keyExtractor({id: 3});
  //    expect(key).toEqual('3')
  //    });

  // it('should flatlist return ListEmptyComponent correctly', () => {
  //     data = [];
  //     const result = renderTodoList();
  //     const flatlist = findWithType(result, FlatList);
  //     expect(flatlist.props.ListEmptyComponent).toBeDefined();
  // });

  it('renders custom style correctly', () => {
    const style = {backgroundColor: 'red'};
    const titleStyle = {color: 'red'};
    const result = renderTodoList();
    const flatlist = findWithType(result, FlatList);
    const view = findAllWithType(result, View);
    const text = findAllWithType(result, Text);

    // expect(view.props.style[1]).toBe(style);
    // expect(text.props.style[1]).toBe(titleStyle);
    // console.log("VIEW STYLE",view.props);
    // console.log("TEXT STYLE",text.props.style);
  });
});
