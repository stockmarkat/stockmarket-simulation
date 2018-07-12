import * as React from 'react';

interface PriceTagProps {
    value?: number;
}

export class PriceTag extends React.PureComponent<PriceTagProps> {
    constructor( props: PriceTagProps ) {
        super( props );
    }

    render() {
        const value = this.props.value;
        if ( value === null || value === undefined ) {
            return '$ -';
        }
        const valueAsString = value.toFixed( 2 ).toString();
        const formatedValue = valueAsString.replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
        return (
            `$ ${formatedValue}`
        );
    }
}