import React from 'react';
import { storiesOf } from '@storybook/react';
import { PrimaryNav } from './PrimaryNav';

let stories = storiesOf('PrimaryNav', module);

stories.add('Default', () =>
  <PrimaryNav text="Primary Nav Item" href="#" />
);
