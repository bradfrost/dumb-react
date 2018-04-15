import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className="c-footer" { ...this.props }>
        This is the footer. 
      </footer>
    );
  }
}

