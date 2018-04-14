import React, { Component } from 'react';
import './Header.css';
import { Logo } from '../Logo/Logo';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { InlineForm } from '../InlineForm/InlineForm';

export class Header extends Component {
  render() {
    return (
      <header className="c-header" { ...this.props }>
        <Logo href="http://bradfrost.com" alt="Company Name" />
        <PrimaryNav 
          listItems={[
            {
              "href": "#",
              "text": "Squeeze Its"
            },
            {
              "href": "#",
              "text": "Capri Suns"
            },
            {
              "href": "#",
              "text": "Hugs"
            },
            {
              "href": "http://google.com",
              "text": "Mondo"
            }
          ]} />
          <InlineForm placeholder="Search the site" cta="Search" />
        { this.props.children }
      </header>
    );
  }
}

