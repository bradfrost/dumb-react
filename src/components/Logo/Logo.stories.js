import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Logo } from './Logo';

import logoimg from '../../images/fpo-120x60.png';

let stories = storiesOf('Global/Logo', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Logo href="http://bradfrost.com" src={ logoimg } alt="Company Name" />
);