import React, { Component } from "react";
import "./PrimaryNav.css";

export class PrimaryNav extends Component {
  render() {
    return (
      <nav className="c-primary-nav { this.props.styleModifier }">
        <ul className="c-primary-nav__list">
          {this.props.listItems.map((item, index) => (
            <li className="c-primary-nav__item" key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
