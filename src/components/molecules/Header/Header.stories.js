import React from 'react';
import Header from "./Header";
import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';

export default {
  title: 'Header',
  component: Header,
};

export const input = () => {
    return(<Header />);
};
