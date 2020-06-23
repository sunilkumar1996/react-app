import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="text-muted">
            <div class="container">
                <p class="float-right">
                    <NavLink to="#">Back to top</NavLink>
                </p>
                <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                <p>New to Bootstrap?
                    <a href="https://getbootstrap.com/">Visit the homepage</a>
                    or read our
                    <a href="/docs/4.5/getting-started/introduction/">getting started guide</a>.</p>
            </div>
        </footer>
    );
}

export default Footer;