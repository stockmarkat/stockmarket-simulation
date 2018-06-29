import * as React from 'react';
import { Goodie } from '../../../state/AppState';

interface GoodieViewProps {
    goodie: Goodie;
}

export class GoodieView extends React.Component<GoodieViewProps> {

    render() {
        const {goodie} = this.props;

        const isStockType = goodie.type === 'stock';

        return (
            <>
                {goodie.type}
                {goodie.amount}
                {isStockType && goodie.stockName}
            </>
        );
    }
}