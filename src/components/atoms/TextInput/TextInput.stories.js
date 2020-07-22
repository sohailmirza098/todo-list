import React from 'react';
import TextInput from "./TextInput";
import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';

export default {
  title: 'TextInput',
  component: TextInput,
};

export const input = () => {
    return(<TextInput />);
};
