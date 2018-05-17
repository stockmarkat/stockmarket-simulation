import * as React from 'react';
import { StatusCard } from '../../../components/StatusCard/StatusCard';
import { PriceTag } from '../../../components/PriceTag';

interface TotalIncomeCardProps {
    value: number;
}

interface TotalIncomeCardState {
}

export class TotalIncomeCard extends React.Component<TotalIncomeCardProps, TotalIncomeCardState> {

    constructor( props: TotalIncomeCardProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-wallet text-success"/>}
                title="Total Income"
                value={<PriceTag value={this.props.value}/>}
                statusIcon={<i className="fa fa-calendar-o"/>}
                statusText="Last Day"
            />
        );
    }
}