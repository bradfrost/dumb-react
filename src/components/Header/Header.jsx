import React, { Component } from 'react';
import './Header.css';
import { Logo } from '../Logo/Logo';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { InlineForm } from '../InlineForm/InlineForm';

import logoImg from '../../images/fpo-120x60.png';

import globals from '../../data/globals.json';
import logoData from '../../data/logo.json';
import nav from '../../data/nav.json';

export class Header extends Component {
  render() {
    return (
      <header className="c-header" { ...this.props }>
        
        <Logo href={ logoData.logoHref } src={ logoImg } alt={ globals.company.name } />
        
        <PrimaryNav 
          listItems={ nav.navList } />

          <InlineForm placeholder="Search the site" cta="Search" />
        { this.props.children }
      </header>
    );
  }
}

