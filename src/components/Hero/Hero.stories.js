import React from 'react';
import { storiesOf } from '@storybook/react';
import { Hero } from './Hero';
import heroImg from '../../images/fpo-1200x650.png';

let stories = storiesOf('Hero', module);

stories.add('Default', () =>
  <Hero heroImgSrc={ heroImg } heroImgAlt="Alt Text" title="Hero Title" description="This is the hero description">
    Hello Hero
  </Hero>
);
