
import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import ShallowRenderer from 'react-test-renderer/shallow';
import { findAllWithType, findWithType } from 'react-shallow-testutils'

import TodoListCard from './todolistcard'

import Button from './button'


import type { PropsType } from './todolistcard'

const renderer = new ShallowRenderer();

const renderTodoListCard = ({
    onPress,
    name,
    id,
}: PropsType = {} ) => {
    renderer.render(<TodoListCard 
        onPress={onPress}
        name={name}
        id={id}
    />);
    return renderer.getRenderOutput();
}

describe('todolistcard component', () => {
    it('renders correctly', () => {
        const result = renderTodoListCard();
        expect(result).toMatchSnapshot();
    }
    );

    it('renders correctly with props', () => {
        const result = renderTodoListCard({
            onPress: () => {},
            name: 'test',
            id: 1,
        });
        expect(result).toMatchSnapshot();
    });

    




});