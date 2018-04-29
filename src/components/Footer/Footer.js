import React, { Component } from "react";
import "./Footer.css";
import { InlineForm } from "../InlineForm/InlineForm";

export class Footer extends Component {
    render() {
        return (
            <footer className="c-footer" {...this.props}>
                <p>This is the footer.</p>
				<InlineForm
					method="post"
					action="#"
                    placeholder="name@email.com"
                    cta="Join our newsletter"
                    id="search-form"
                    label="Email address"
                />
            </footer>
        );
    }
}
