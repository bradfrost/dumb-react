import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from './Hero';

let stories = storiesOf('Hero', module);

stories.add('Default', () =>
  <Hero title="Hero Title" description="This is the hero description">
    Hello Hero
  </Hero>
);
