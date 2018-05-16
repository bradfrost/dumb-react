# Dumb React
Dumb React is a collection of [React](https://reactjs.org/) components used to create a static (dumb) website screen. Why do this? Many React tutorials or boilerplates I've encountered are either too basic ("here's a button component!") or more often too complex ("here's a simple babel typescript redux cssmodules isometric oh god oh god oh god..."). I wanted to be able to be able to draw a straight line from how a simple component ("[atom](http://atomicdesign.bradfrost.com/chapter-2/#atoms)" in atomic design speak) makes its way into a full [page](http://atomicdesign.bradfrost.com/chapter-2/#pages).

There are a ton of different ways to build reusable components and put dynamic content inside them, and many teams &mdash; even ones that aren't building highly-interactive web apps that would actually benefit from a tool like React &mdash; are reaching for React to create component-driven experiences. So in that spirit, I wanted to create a demo that shows how to construct a whole screen (even if it's dumb, static one) one out of React components.

[More info in my blog post](http://bradfrost.com/blog/post/dumb-react/)

# React w/ Storybook Starter
This repo is a fork of Micah Godbolt's [React with Storybook Starter](https://github.com/micahgodbolt/react-with-storybook-starter), which is a combination of [Create React App](https://github.com/facebook/create-react-app) and the [Storybook CLI](https://github.com/storybooks/storybook#getting-started). The `stories` folder has been changed to `components` and a new Button component has been scaffolded and used in the application.

## Using This Repo

- `git clone https://github.com/bradfrost/dumb-react.git && cd dumb-react`
- `npm install`
- `npm start` will start the application
- `npm run storybook` will start the storybook.

## Building components

Start building in the `src/components` folder with this folder structure

```js
- ComponentName
  - Component.css
  - ComponentName.stories.js
  - ComponentName.js
```

Create `src/components/Button` and add `Button.css`, `Button.js` and `Button.stories.js`

__Button.js__ will be:

```js
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

__Button.css__ is plain CSS, but will automatically be loaded when the component is used.

### Run Storybook

```bash
npm run storybook
```

## Add Button to App.js

```jsx
import React, { Component } from 'react';
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

Adding Sass involves "ejecting" out of create react app. This process is out of the scope of this demo, but I'll include some links below.

- [Adding Sass support to Create React App](https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc)
- [Adding Sass support to Storybook](https://storybook.js.org/configurations/custom-webpack-config/)