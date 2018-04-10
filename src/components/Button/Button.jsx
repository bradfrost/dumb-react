import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    return (
      <button className="Button" {...this.props}> {this.props.children} </button>
    );
  }
}

