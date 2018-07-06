import * as React from 'react';
import { PriceTag } from '../../../components/PriceTag';
import { StatusCard } from '../../../components/StatusCard/StatusCard';

interface BalanceTileProps {
    value: number;
}

interface BalanceTileState {
}

class BalanceCard extends React.Component<BalanceTileProps, BalanceTileState> {

    constructor( props: BalanceTileProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-piggy text-success"/>}
                title="Account Balance"
                value={<PriceTag value={this.props.value}/>}
                noFooter={true}
            />
        );
    }
}
export default BalanceCard;