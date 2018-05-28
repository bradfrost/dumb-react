import React, { Component } from 'react';
import './PrimaryNav.css';

export class PrimaryNav extends Component {
  render() {

    return (
      <nav className="c-primary-nav { this.props.styleModifier }">
        <ul className="c-primary-nav__list">
          {this.props.listItems.map(function(listItem, index){
            return <li class="c-primary-nav__item" key={`c-primary-nav__item-${index}`}>
              <a href={ listItem.href }>
                { listItem.text }
              </a>
            </li>
          })}
        </ul>
      </nav>
    );
  }
}
