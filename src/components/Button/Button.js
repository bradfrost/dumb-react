import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    return (
      <button className={"c-btn " + this.props.styleModifier } {...this.props}>
        { this.props.text }
      </button>
    );
  }
}

