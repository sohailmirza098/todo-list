import React from 'react';
import ButtonInput from "./ButtonInput";
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonInput',
  component: ButtonInput,
};

const buttonData = {
  hidden: 'false',
  setHidden: action('Button Clicked')
}


export const ButtonInputStory = () => (
  <ButtonInput />
);

// npx -p @storybook/cli sb init --type react_scripts