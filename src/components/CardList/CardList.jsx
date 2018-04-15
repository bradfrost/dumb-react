import React, { Component } from 'react';
import './CardList.css';
import { Card } from '../Card/Card';

export class CardList extends Component {
  render() {
    return (
      <ul className="c-card-list">
        {this.props.listItems.map(function(listItem){
          return <Card styleModifier={ listItem.styleModifier } title={ listItem.title } description={ listItem.description } />
        })}
      </ul>
    );
  }
}

