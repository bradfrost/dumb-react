import React, { Component } from "react";
import "./InlineForm.css";
import { Button } from "../Button/Button";

export class InlineForm extends Component {
    render() {
        return (
            <form
                className="c-inline-form"
                method={this.props.method}
                action={this.props.action}
            >
                <label htmlFor={ this.props.id } className="c-inline-form__label u-is-vishidden">{this.props.label}</label>
                <input
                    id={ this.props.id }
                    className="c-inline-form__input"
                    placeholder={this.props.placeholder}
                />
                <Button text={this.props.cta} />
            </form>
        );
    }
}
