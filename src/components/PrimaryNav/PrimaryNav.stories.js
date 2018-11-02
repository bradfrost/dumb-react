import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { PrimaryNav } from './PrimaryNav';

let stories = storiesOf('Navigation/PrimaryNav', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
<PrimaryNav 
  listItems={[
      {
        "href": "#",
        "text": "Nav Item 1"
      },
      {
        "href": "#",
        "text": "Nav Item 2"
      },
      {
        "href": "#",
        "text": "Nav Item 3"
      },
      {
        "href": "#",
        "text": "Nav Item 4"
      }
    ]} 
  />
);