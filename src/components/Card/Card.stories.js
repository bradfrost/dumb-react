import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { Card } from './Card';

let stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);

stories.add('Default', () =>
  <Card title="Card Title" description="This is a description of what the card is">
    This is the section body.
  </Card>
);
