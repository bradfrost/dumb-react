import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Card } from './Card';

let stories = storiesOf('Blocks/Card', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Card>
    This is the card body.
  </Card>
);

stories.add('Dark', () =>
  <Card theme="dark" title="Dark Card Title" description="This is the card description">
    This is the card body.
  </Card>
);
