import * as React from 'react';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';

interface BuyOrSellViewProps {
    onBuy: ( amount: number ) => void;
    onSell: ( amount: number ) => void;
}

interface BuyOrSellViewState {
    buyOrSellAmount: number;
}

export class BuyOrSellView extends React.Component<BuyOrSellViewProps, BuyOrSellViewState> {

    constructor( props: BuyOrSellViewProps ) {
        super( props );

        this.state = {buyOrSellAmount: 1};
        this.updateInputValue = this.updateInputValue.bind( this );
    }

    updateInputValue( amount: number ) {
        this.setState( {buyOrSellAmount: amount} );
    }

    render() {
        const {onBuy, onSell} = this.props;
        const {buyOrSellAmount} = this.state;

        return (
            <>
                <BuyButton
                    onClick={() => {
                        onBuy( buyOrSellAmount );
                    }}
                />
                <input
                    type="number"
                    min="1"
                    value={buyOrSellAmount}
                    pattern={'\\d*'}
                    className="input-small"
                    onChange={evt => this.updateInputValue( evt.target.valueAsNumber )}
                />
                <SellButton
                    onClick={() => {
                        onSell( buyOrSellAmount );
                    }}
                />
            </>
        );
    }
}