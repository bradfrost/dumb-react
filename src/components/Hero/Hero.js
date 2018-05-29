import React, { Component } from 'react';
import './Hero.css';

export class Hero extends Component {
  render() {
    return (
      <div className="c-hero">
        <img className="c-hero__img" src={ this.props.heroImgSrc } alt={ this.props.heroImgAlt } />
        <div className="c-hero__body">
          <h2 className="c-hero__title">{ this.props.title }</h2>
          <p className="c-hero__description">{ this.props.description }</p>
        </div>
      </div>
    );
  }
}

