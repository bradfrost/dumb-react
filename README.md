# React w/ Storybook Starter

Want to get up and running with a React application and Storybook?

This repo is a combination of [Create React App](https://github.com/facebook/create-react-app) and the [Storybook CLI](https://github.com/storybooks/storybook#getting-started). The `stories` folder has been changed to `components` and a new Button component has been scaffolded and used in the application.

## Using This Repo

- `git clone https://github.com/micahgodbolt/react-with-storybook-starter.git && cd react-with-storybook-starter`
- `npm install`
- `npm start` (for the application)

or

- `npm run storybook` (for storybook)


Below are the steps taken to get to where this repo is now. If you're starting a new application I'd recommend following them, as the CLI's may have been updated since this repo was created.

## New Project Setup

- `npm install -g create-react-app`
- `npm i -g @storybook/cli`
- `create-react-app my-app`
- `cd my-app`
- `getstorybook`
- changed src/stories folder to src/components

### Import all stories

The default configuration of Storybook only imports a single index file. Lets change that to import all of our story files.

Change ./.storybook/config.js to import all files matching *.stories.js as follows:

```js
const req = require.context("../src/components", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
```

## Building components

Start building in the components folder with this folder structure

```js
- ComponentName
  - Component.css
  - ComponentName.stories.js
  - ComponentName.jsx
```

Create `src/components/Button` and add `Button.css`, `Button.jsx` and `Button.stories.js`

__Button.jsx__ will be:

```jsx
import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    return (
      <button className="Button" {...this.props}> {this.props.children} </button>
    );
  }
}
```

__Button.stories.js__ will be:

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

let stories = storiesOf('Button', module);

stories.add('Default', () =>
  <Button onClick={() => console.log("clicked!!")}>
    Hello Button
  </Button>
);

```

__Button.css__ is just CSS, but will automatically be loaded when the component is used.

### Run Storybook

```bash
npm run storybook
```

## Add Button to App.js

```jsx
import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => alert('i was clicked!')} > Click Me Please </Button>
      </div>
    );
  }
}

export default App;
```

### Run the application 

```bash
npm start
```

## Adding Sass

Adding Sass isn't very difficult, but it does involve "ejecting" out of create react app. This process is out of the scope of this demo, but I'll include some links below.

- [Adding Sass support to Create React App](https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc)
- [Adding Sass support to Storybook](https://storybook.js.org/configurations/custom-webpack-config/)