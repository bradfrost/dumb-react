import { configure } from '@storybook/react';
import '../src/css/App.css';

const req = require.context("../src/components", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);