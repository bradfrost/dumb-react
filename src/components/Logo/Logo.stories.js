import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './Logo';

let stories = storiesOf('Logo', module);

stories.add('Default', () =>
  <Logo href="http://bradfrost.com" alt="Company Name" />
);
