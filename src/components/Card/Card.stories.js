import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';
import { Card } from './Card';

let stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories.add('Default', () =>
  <Card styleModifier={select('styleModifier',{none: 'none', "c-card--dark": 'Dark'})} title={text('Title', 'Card Title')} description={text('Description', 'This is the card description')}>
    This is the card body.
  </Card>
);
