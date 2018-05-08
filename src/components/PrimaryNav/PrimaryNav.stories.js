import React from 'react';
import { storiesOf } from '@storybook/react';
import { PrimaryNav } from './PrimaryNav';

let stories = storiesOf('PrimaryNav', module);

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