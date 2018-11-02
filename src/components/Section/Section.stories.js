import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { Section } from './Section';

let stories = storiesOf('Containers/Section', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Section title="Section Title" description="This is a description of what the section is">
    This is the section body, where you can put any content or include other components.
  </Section>
);
