import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './Header';

let stories = storiesOf('Global/Header', module);

stories.add('Default', () =>
  <Header />
);
