import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

export class Hero extends Component {
  render() {
    return (
      <div className="c-hero" { ...this.props }>
        <img className="c-hero__img" src={ this.props.heroimgsrc } alt={ this.props.heroimgalt } />
        <div className="c-hero__body">
          <h2 className="c-hero__title">{ this.props.title }</h2>
          <p className="c-hero__description">{ this.props.description }</p>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {
  heroimgsrc: PropTypes.string.isRequired,
  heroimgalt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

Hero.defaultProps = {
  heroimgsrc: "../../images/fpo-1200x650.png",
  title: "Hero Title",
  description: "This is the hero description"
};

