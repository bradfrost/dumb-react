import React, { Component } from "react";
import "./Footer.css";
import { InlineForm } from "../InlineForm/InlineForm";
import globals from "../../data/globals.json";

export class Footer extends Component {
    render() {
        return (
            <footer className="c-footer" {...this.props}>
				<InlineForm
					method="post"
					action="#"
                    placeholder="name@email.com"
                    cta="Join our newsletter"
                    id="search-form"
                    label="Email address"
                />

                <p className="c-footer__copyright">&copy; { (new Date()).getFullYear() } { globals.company.name }</p>
            </footer>
        );
    }
}
