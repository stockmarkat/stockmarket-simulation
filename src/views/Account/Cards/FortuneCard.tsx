import * as React from 'react';
import { StatusCard } from '../../../components/StatusCard/StatusCard';
import { PriceTag } from '../../../components/PriceTag';

interface FortuneCardProps {
    value: number;
}

interface FortuneCardState {
}

export class FortuneCard extends React.Component<FortuneCardProps, FortuneCardState> {

    constructor( props: FortuneCardProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-piggy text-success"/>}
                title="Fortune"
                value={<PriceTag value={this.props.value}/>}
                statusIcon={<i className="fa fa-refresh"/>}
                statusText="Updated now"
            />
        );
    }
}