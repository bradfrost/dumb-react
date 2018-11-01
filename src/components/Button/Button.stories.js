import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { Button } from './Button';

let stories = storiesOf('Buttons/Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', () =>
  <Button disabled={boolean('Disabled', false)} isSecondary={boolean('isSecondary', false)} text={text('Button Text', 'Button')} onClick={() => console.log("clicked!!")} />
);

stories.add('Secondary', () =>
  <Button isSecondary text={text('Button Text', 'Button')} onClick={() => console.log("clicked!!")} />
);