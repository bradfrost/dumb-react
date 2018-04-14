import React, { Component } from 'react';
import './Logo.css';

export class Logo extends Component {
  render() {
    return (
      <a href="{ this.props.href }" className="c-logo" { ...this.props }>
      { this.props.alt }
        <img className="c-logo__img" src="{ this.props.src }" alt="{ this.props.alt }" />
      </a>
    );
  }
}

