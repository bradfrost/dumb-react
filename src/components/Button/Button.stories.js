import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () =>
  <Button text="Button" onClick={() => console.log("clicked!!")} />
);
