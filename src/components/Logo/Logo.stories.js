import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from './Logo';

import logoImg from '../../images/fpo-120x60.png';

let stories = storiesOf('Logo', module);

stories.add('Default', () =>
  <Logo href="http://bradfrost.com" src={ logoImg } alt="Company Name" />
);
