import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FinancialSnapshot } from '../../state/AppState';

interface FinancialDevelopmentProps {
    valueHistory: FinancialSnapshot[];
    interval: number;
    yAxisDomain?: [string, string] | [number, number] | [number, string];
}

export default class FinancialDevelopmentChart extends React.PureComponent<FinancialDevelopmentProps> {

    render() {
        const { valueHistory, yAxisDomain } = this.props;
        const domain = yAxisDomain ? yAxisDomain : ['auto, auto'];

        return (
            <ResponsiveContainer height={200} width="100%">
                <AreaChart data={valueHistory}>
                    <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3472F7" stopOpacity={0.9}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis
                        dataKey={'date'}
                        interval={this.props.interval}
                    />
                    <YAxis domain={domain}/>
                    <Area isAnimationActive={false} dataKey="value" stroke="#3472F7" fill="url(#colorStock)"/>
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}