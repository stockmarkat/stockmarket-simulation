import * as React from 'react';
import { Goodie } from '../../../state/AppState';
import { PriceTag } from '../../../components/PriceTag';

interface GoodieViewProps {
    goodie: Goodie;
}

export class GoodieView extends React.Component<GoodieViewProps> {

    render() {
        const {goodie} = this.props;

        const isStockType = goodie.type === 'stock';
        const isMoneyType = goodie.type === 'money';

        let stockWord = 'stocks';
        if (goodie.amount === 1) {
            stockWord = 'stock';
        }

        return (
            <>
                {isStockType && goodie.amount + ' '}
                {isMoneyType && <PriceTag value={goodie.amount}/>}&nbsp;
                {isStockType && stockWord + ' from'} {isStockType && goodie.stockName}
            </>
        );
    }
}