import * as React from 'react';

export interface FooterLinkProps {
    to: string;
}

export class FooterLink extends React.PureComponent<FooterLinkProps> {

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