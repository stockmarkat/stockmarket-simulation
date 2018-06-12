import * as React from 'react';

interface CardProps {
    plain?: boolean;
    title?: string;
    category?: string;

    hCenter?: boolean;
    ctAllIcons?: boolean;
    ctTableFullWidth?: boolean;
    ctTableResponsive?: boolean;
    ctTableUpgrade?: boolean;

    legend?: string;
    stats?: string;
    statsIcon?: string;

    noFooter?: boolean;
    noHeader?: boolean;
    noBottomPadding?: boolean;
}

interface CardState {
}

export class Card extends React.Component<CardProps, CardState> {

    constructor( props: CardProps ) {
        super( props );
    }

    render() {
        return (
            <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
                {
                    !this.props.noHeader &&
                    <div
                        className={
                            'header'
                            + (this.props.hCenter ? ' text-center' : '')
                        }
                    >
                        <h4 className="title">{this.props.title}</h4>
                        <p className="category">{this.props.category}</p>
                    </div>
                }
                <div
                    className={
                        (this.props.noBottomPadding ? ' content-no-footer' : 'content')
                        + (this.props.ctAllIcons ? ' all-icons' : '')
                        + (this.props.ctTableFullWidth ? ' table-full-width' : '')
                        + (this.props.ctTableResponsive ? ' table-responsive' : '')
                        + (this.props.ctTableUpgrade ? ' table-upgrade' : '')}
                >

                    {this.props.children}

                    {
                        !this.props.noFooter &&
                        <div className="footer">
                            {this.props.legend}
                            {this.props.stats != null ? <hr/> : ''}
                            <div className="stats">
                                <i className={this.props.statsIcon}/> {this.props.stats}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}