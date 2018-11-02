import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Logo.css';

export class Logo extends Component {

  render() {
    return (
      <a href={ this.props.href } className="c-logo" rel="home" { ...this.props }>
        <img className="c-logo__img" src={ this.props.src } alt={ this.props.alt } />
      </a>
    );
  }
}

Logo.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
