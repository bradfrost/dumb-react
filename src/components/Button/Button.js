import React, { Component } from "react";
import classnames from "classnames";
import "./Button.css";

export class Button extends Component {

    render() {
        const btnClass = classnames('c-btn', this.props.className, {
            'c-btn--secondary': this.props.isSecondary
        });
        
        return <button className={btnClass}>{this.props.text}</button>;
    }
}

Button.defaultProps = {
    text: 'Button',
    isSecondary: false
}
