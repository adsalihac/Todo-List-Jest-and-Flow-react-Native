// @flow

import React from 'react';
import { findAllWithType, findWithType } from 'react-shallow-testutils';
import ShallowRenderer from 'react-test-renderer/shallow';

import Input from './input'
import Button from './button'
import TodoList from './todolist'

import App from './app';

// let renderer: ShallowRenderer;
const renderer = new ShallowRenderer();


const renderApp = () => {
    renderer.render(<App />);
    return renderer.getRenderOutput();
};
describe('app', () => {
    // beforeEach(() => {
    // renderer = new ShallowRenderer();
    // });
    it('renders correctly', () => {
        const result = renderApp();
        expect(result).toMatchSnapshot();
    });

    it('renders a button', () => {
        const result = renderApp();
        const buttons = findAllWithType(result, Button);
        expect(buttons.length).toBe(1);
    }
    );

    it('renders an input', () => {
        const result = renderApp();
        const inputs = findAllWithType(result, Input);
        expect(inputs.length).toBe(1);
    }
    );

    it('renders a todolist', () => {
        const result = renderApp();
        const todolists = findAllWithType(result, TodoList);
        expect(todolists.length).toBe(1);
    }   
    );

    it('renders a todolist with data', () => {
        const result = renderApp();
        const todolists = findAllWithType(result, TodoList);
        // console.log("🚀 ~ file: app.spec.js ~ line 54 ~ it ~ todolists", todolists[0].props.data)
        expect(todolists[0].props.data.length).toEqual(3);
    }
    );




    it('renders button with correct action', () => {
        const result = renderApp();

        const taskInput = findWithType(result, Input);
        const taskname = 'taskname';
        taskInput.props.onChangeText(taskname);

        const todolist = findWithType(result, TodoList);
        const todos = [{ name: 'taskname' }];
        todolist.props.onChangeData(todos);

        const button = findWithType(result, Button);
        button.props.onPress();
    });

    it('renders button with wrong action', () => {
        const result = renderApp();
        const instance = renderer.getMountedInstance();

        const taskInput = findWithType(result, Input);


        taskInput.props.onChangeText('');
        expect(instance.state.text).toBe(''); //true

        // console.log("TEXT", instance.state.text);

    //     global.alert = jest.fn();
    //   expect(global.alert).toHaveBeenCalledTimes(1);


        const button = findWithType(result, Button);
        button.props.onPress();
    });


    // it('renders a list', () => {
    //     const result = renderApp();
    //     const list = findWithType(result, 'ul');
    //     expect(list).toBeDefined();
    // }
    // );

    // it('renders a list item', () => {
    //     const result = renderApp();
    //     const listItem = findWithType(result, 'li');
    //     expect(listItem).toBeDefined();
    // }
    // );



    // it('renders correctly with empty inputs', () => {
    //     const result = renderApp();
    //     expect(result).toMatchSnapshot();

    //     expect(findAllWithType(result, Input).length).toBe(1);

    //     // console.log("Button", findAllWithType(result, Input).length);

    //     const button = findWithType(result, Button);
    //     button.props.onPress(); 
    //     // button.props.onPress();
    //     // console.log("BUTTON PROB", button.props.onPress);

    //     const output = renderer.getRenderOutput();
    //     const task = findAllWithType(output, Input);
    //     console.log( findAllWithType(output, Input).length);


    // });

});
