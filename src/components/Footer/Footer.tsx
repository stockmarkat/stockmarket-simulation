import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { FooterLink } from './FooterLink';

export class Footer extends React.PureComponent {

    getFooterLinks() {
        return (
            <ul>
                <FooterLink to="https://github.com/stockmarkat/stockmarket-simulation">
                    Github
                </FooterLink>
            </ul>
        );
    }

    render() {
        return (
            <footer className="footer">
                <Grid bsClass={''}>
                    <nav className="pull-left small-padding-left">
                        {this.getFooterLinks()}
                    </nav>
                </Grid>
            </footer>
        );
    }
}