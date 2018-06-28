import * as React from 'react';
import { PriceTag } from '../../../components/PriceTag';
import { StatusCard } from '../../../components/StatusCard/StatusCard';

interface StockBalanceTileProps {
    value: number;
}

interface StockBalanceTileState {
}

class StockBalanceCard extends React.Component<StockBalanceTileProps, StockBalanceTileState> {

    constructor( props: StockBalanceTileProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-graph2 text-warning"/>}
                title="Stock Balance"
                value={<PriceTag value={this.props.value}/>}
                noFooter={true}
            />
        );
    }
}
export default StockBalanceCard;