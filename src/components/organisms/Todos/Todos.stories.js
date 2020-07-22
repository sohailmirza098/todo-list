import React from 'react';
import Todos from "./Todos";
import { action } from '@storybook/addon-actions';
import { ulid } from 'ulid';
// import { text } from '@storybook/addon-knobs/react';

export default {
  title: 'Todos',
  component: Todos,
};

let props = [
    {
        id: ulid(),
        title: "eat",
        completed: false
    },
    {
        id: ulid(),
        title: "sleep",
        completed: false
    },
]

export const input = () => {
    return(<Todos todos={props} />);
};
