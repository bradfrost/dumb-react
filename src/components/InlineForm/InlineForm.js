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
                <input
                    className="c-inline-form__input"
                    placeholder={this.props.placeholder}
                />
                <Button styleModifier="c-btn--light" text={this.props.cta} />
            </form>
        );
    }
}
