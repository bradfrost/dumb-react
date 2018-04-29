import React, { Component } from "react";
import classnames from "classnames";
import "./Button.css";

export class Button extends Component {

    render() {
        return (
            <button
                className={"c-btn " + this.props.styleModifier}
                {...this.props}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
	text: 'Button Texxxxxxxxxxxxt',
	color: 'red',
	size: 'small'
}
