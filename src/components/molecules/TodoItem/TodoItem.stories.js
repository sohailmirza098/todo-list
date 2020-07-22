import React from 'react';
import TodoItem from "./TodoItem";
import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';
import { ulid } from 'ulid';

export default {
  title: 'TodoItem',
  component: TodoItem,
};

let props = {
    "data-testid": "todoid",
    key: ulid(),
    todo: {
        id: 1,
        title: "title",
        completed: false
    }
}

export const input = () => {
    return(<TodoItem key={ props.key } todo={props.todo} />);
};
