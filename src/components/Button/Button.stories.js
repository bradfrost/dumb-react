import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', () =>
  <Button disabled={boolean('Disabled', true)} text={text('Label', 'Hello Button')} onClick={() => console.log("clicked!!")} />
);
