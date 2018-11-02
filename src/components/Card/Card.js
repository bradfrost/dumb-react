import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Card.css";

export class Card extends Component {
    render() {
        let cardClass = classnames({
            "c-card": true,
            "c-card--dark": this.props.theme === "dark"
        });

        return (
            <div className={cardClass}>
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

Card.propTypes = {
    cardClass: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node
}

Card.defaultProps = {
    title: "Card Title",
    description: "This is the card description"
};