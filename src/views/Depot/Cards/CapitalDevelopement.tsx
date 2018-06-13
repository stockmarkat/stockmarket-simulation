import * as React from 'react';
import Card from '../../../components/Card';
import { FinancialSnapshot } from '../../../state/AppState';
import StockAreaChart from '../../Market/Cards/StockAreaChart';

interface CapitalDevelopementProps {
    values: FinancialSnapshot[];
}

interface CapitalDevelopementState {
}

export class CapitalDevelopement extends React.Component<CapitalDevelopementProps, CapitalDevelopementState> {

    constructor( props: CapitalDevelopementProps ) {
        super( props );
    }

    render() {
        return (
            <Card title={'Capital Development'} noFooter={true}>
                <StockAreaChart valueHistory={this.props.values}/>
            </Card>
        );
    }
}
