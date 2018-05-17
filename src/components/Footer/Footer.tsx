import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { FooterLink } from './FooterLink';

interface FooterProps {
}

interface FooterState {
}

export class Footer extends React.Component<FooterProps, FooterState> {

    constructor( props: FooterProps ) {
        super( props );
    }

    getFooterLinks() {
        return (
            <ul>
                <FooterLink to="https://github.com/RohrerF/factorygame">
                    Github
                </FooterLink>
                <FooterLink to="https://github.com/RohrerF/factorygame/issues">
                    Issues
                </FooterLink>
            </ul>
        );
    }

    getCopyRight() {
        return (
            <p className="copyright pull-right">
                &copy; {(new Date()).getFullYear()} <a href="https://rohrerf.github.io">RohrerF</a>
            </p>
        );
    }

    render() {
        return (
            <footer className="footer">
                <Grid bsClass={''}>
                    <nav className="pull-left">
                        {this.getFooterLinks()}
                    </nav>
                    {this.getCopyRight()}
                </Grid>
            </footer>
        );
    }
}