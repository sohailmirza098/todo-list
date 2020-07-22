import React from 'react';
import RemoveButton from "./RemoveButton";
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

export default {
  title: 'RemoveButton',
  component: RemoveButton,
  // decorators: [withKnobs]
};

const buttonData = {
  hidden: 'false',
  value: 'x',
  delTodo: action("Button clicked"),
}

export const RemoveButtonStory = () => {

    return(<RemoveButton {...buttonData}></RemoveButton>);
};
