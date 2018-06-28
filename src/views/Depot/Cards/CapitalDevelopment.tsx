import * as React from 'react';
import Card from '../../../components/Card';
import { FinancialSnapshot } from '../../../state/AppState';
import { CapitalConfig } from '../../../state/Config';
import OurAreaChart from '../../../components/Charts/OurAreaChart';

interface CapitalDevelopmentProps {
    values: FinancialSnapshot[];
}

export class CapitalDevelopment extends React.Component<CapitalDevelopmentProps> {

    render() {
        return (
            <Card title={'Capital Development'} noFooter={true}>
                <OurAreaChart
                    valueHistory={this.props.values}
                    interval={CapitalConfig.points() / 6}
                    yAxisDomain={[0, 'auto']}
                />
            </Card>
        );
    }
}
