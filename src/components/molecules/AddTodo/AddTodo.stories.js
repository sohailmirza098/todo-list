import React from 'react';
import AddTodo from "./AddTodo";
import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';

export default {
  title: 'AddTodo',
  component: AddTodo,
};

export const input = () => {
    return(<AddTodo />);
};
