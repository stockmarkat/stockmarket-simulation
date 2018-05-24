import * as React from 'react';
import { PriceTag } from '../PriceTag';

interface ItemCardPriceTagProps {
    type: 'buy' | 'sell';
    name?: string;
    price?: number;
}

interface ItemCardPriceTagState {
}

export class ItemCardPriceTag extends React.Component<ItemCardPriceTagProps, ItemCardPriceTagState> {

    constructor( props: ItemCardPriceTagProps ) {
        super( props );
        this.getText = this.getText.bind( this );
    }

    getText() {
        const {type, name} = this.props;
        if ( name ) {
            return name;
        }
        return type === 'buy' ? 'Buy' : 'Sell';
    }

    render() {
        const {price, type} = this.props;
        return (
            <p className={`${type}-price`}>
                <span className="item-card-price-tag">
                    {this.getText()}:
                </span>
                <PriceTag value={price}/>
            </p>
        );
    }
}