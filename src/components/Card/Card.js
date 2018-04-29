import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
    render() {
        return (
            <div className={"c-card " + this.props.styleModifier}>
                <header className="c-card__header">
                    <h3 className="c-card__title">{this.props.title}</h3>
                    <p className="c-card__description">
                        {this.props.description}
                    </p>
                </header>
                <div className="c-card__body">{this.props.children}</div>
            </div>
        );
    }
}

Card.defaultProps = {
	title: 'Card Title',
	description: 'This is the card description'
}
