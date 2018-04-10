import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () =>
  <Button onClick={() => console.log("clicked!!")}>
    Hello Button
  </Button>
);
