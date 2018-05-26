import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./CardList.css";
import { Card } from "../Card/Card";

export class CardList extends Component {
    render() {
        return <ul className="c-card-list">
            {this.props.listItems.map((item, index) => (
                <Card
                    key={index}
                    theme={item.theme}
                    title={item.title}
                    description={item.description}
                > </Card>
            ))}
        </ul>;
    }
}

CardList.defaultProps = {
	listItems: PropTypes.array
}
