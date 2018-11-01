import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import "./Button.css";

export class Button extends Component {

    render() {
        const btnClass = classnames('c-btn', this.props.className, {
            'c-btn--secondary': this.props.isSecondary
        });

        return (
            <button
                className={ btnClass }
                disabled={ this.props.disabled }

                {...this.props}
            >
                {this.props.text}
            </button>
        );
    }
}

Button.propTypes = {
    btnClass: PropTypes.string,
    isSecondary: PropTypes.bool,
    disabled: PropTypes.bool,
    text: PropTypes.text
}

Button.defaultProps = {
    isSecondary: false,
    disabled: false,
    text: 'Button'
}
