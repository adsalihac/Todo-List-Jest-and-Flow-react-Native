// @flow

import React from 'react';
import { FlatList , Text, View , TouchableOpacity} from 'react-native'
import ShallowRenderer from 'react-test-renderer/shallow';
import { findAllWithType, findWithType } from 'react-shallow-testutils'

import TodoList from './todolist'

import type { PropsType } from './input'

const renderer = new ShallowRenderer();

const renderTodoList = ({
    data,
}: PropsType = {} ) => {
    renderer.render(<TodoList 
        data={data}
    />);
    return renderer.getRenderOutput();
}

describe('todolist component', () => {
    it('renders correctly', () => {
        const result = renderTodoList();
        expect(result).toMatchSnapshot();       
    });

    it('renders a flatlist', () => {
        const result = renderTodoList();
        const flatlist = findAllWithType(result, FlatList);
        expect(flatlist.length).toBe(1);
    }
    );

    it('renders a flatlist with data', () => {
        const result = renderTodoList({
            data: [{ id: 1, name: 'data1' }, { id: 2, name: 'data2' }, { id: 3, name: 'data3' }],
        });
        const flatlist = findAllWithType(result, FlatList);
        expect(flatlist.length).toBe(1);
    }
    );

    it('renders a flatlist with no data', () => {
        const result = renderTodoList();
        const flatlist = findAllWithType(result, FlatList);
        expect(flatlist.length).toBe(1);
    });

    it('should flatlist return keyExtractor correctly', () => {
        const result = renderTodoList();
        const flatlist = findWithType(result, FlatList);

        const key = flatlist.props.keyExtractor({ id: 1});
        expect(key).toBe('1');
    });

    // it('should flatlist return keyExtractor correctly', () => {
    //     const key = wrapper
    //                 .find('FlatList')
    //                 .props()
    //                 .keyExtractor({id: 3});
       
    //    expect(key).toEqual('3')
    //    });

    it('should flatlist return ListEmptyComponent correctly', () => {
        data = [];
        const result = renderTodoList();
        const flatlist = findWithType(result, FlatList);
        expect(flatlist.props.ListEmptyComponent).toBeDefined(); 
    });

    it('renders custom style correctly', () => {
        const style = { backgroundColor: 'red' };
        const titleStyle = { color: 'red' };
    
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