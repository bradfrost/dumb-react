import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="c-footer" { ...this.props }>
      I'm a footer
        { this.props.children }
      </footer>
    );
  }
}

