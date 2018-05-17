import * as React from 'react';
import { StatusCard } from '../../../components/StatusCard/StatusCard';
import { PriceTag } from '../../../components/PriceTag';

interface TotalExpensesCardProps {
    value: number;
}

interface TotalExpensesCardState {
}

export class TotalExpensesCard extends React.Component<TotalExpensesCardProps, TotalExpensesCardState> {

    constructor( props: TotalExpensesCardProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-wallet text-danger"/>}
                title="Total Expenses"
                value={<PriceTag value={this.props.value}/>}
                statusIcon={<i className="fa fa-calendar-o"/>}
                statusText="Last Day"
            />
        );
    }
}