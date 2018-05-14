import React from 'react';
import { storiesOf } from '@storybook/react';
import { Section } from './Section';

let stories = storiesOf('Containers/Section', module);

stories.add('Default', () =>
  <Section title="Section Title" description="This is a description of what the section is">
    This is the section body, where you can put any content or include other components.
  </Section>
);
