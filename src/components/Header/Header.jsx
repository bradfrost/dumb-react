import React, { Component } from 'react';
import './Header.css';
import { Logo } from '../Logo/Logo';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { InlineForm } from '../InlineForm/InlineForm';

import logoImg from '../../images/fpo-120x60.png';

export class Header extends Component {
  render() {
    return (
      <header className="c-header" { ...this.props }>
        <Logo href="http://bradfrost.com" src={ logoImg } alt="Company Name" />
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

