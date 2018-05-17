import * as React from 'react';
import { StatusCard } from '../../../components/StatusCard/StatusCard';
import { PriceTag } from '../../../components/PriceTag';

interface InventoryValueCardProps {
    value: number;
}

interface InventoryValueCardState {
}

export class InventoryValueCard extends React.Component<InventoryValueCardProps, InventoryValueCardState> {

    constructor( props: InventoryValueCardProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-server text-success"/>}
                title="Inventory Value"
                value={<PriceTag value={this.props.value}/>}
                statusIcon={<i className="fa fa-refresh"/>}
                statusText="Updated now"
            />
        );
    }
}