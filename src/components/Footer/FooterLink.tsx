import * as React from 'react';

export interface FooterLinkProps {
    to: string;
}

export interface FooterLinkState {
}

export class FooterLink extends React.Component<FooterLinkProps, FooterLinkState> {

    constructor( props: FooterLinkProps ) {
        super( props );
    }

    render() {

        const {
            children,
            to
        } = this.props;

        return (
            <li>
                <a href={to}>
                    {children}
                </a>
            </li>
        );
    }
}