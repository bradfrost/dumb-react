import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Card } from './Card';

let stories = storiesOf('Blocks/Card', module);

stories.addDecorator(withKnobs);

stories.add('Default', () =>
  <Card theme={select('theme',{none: 'none', "dark": 'Dark'})} title={text('Title', 'Card Title')} description={text('Description', 'This is the card description')}>
    This is the card body.
  </Card>
);

stories.add('Dark', () =>
  <Card theme="dark" title={text('Title', 'Dark Card Title')} description={text('Description', 'This is the card description')}>
    This is the card body.
  </Card>
);
