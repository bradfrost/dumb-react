import React, { Component } from "react";
import classnames from "classnames";
import "./Button.css";

export class Button extends Component {

    render() {
        //TODO: I don't know the most elegent, legible way
        //      to stitch together classNames based on props.
        let btnClass = classnames({
            "c-btn": true,
            "c-btn--secondary": this.props.isSecondary
        });

        return (
            <button
                className={ btnClass }
                {...this.props}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.defaultProps = {
    text: 'Button',
    isSecondary: false
}
