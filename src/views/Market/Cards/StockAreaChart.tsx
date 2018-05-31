import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FinancialSnapshot } from '../../../state/AppState';
import * as moment from 'moment';

interface StockAreaChartProps {
    valueHistory: FinancialSnapshot[];
}

interface StockAreChardState {
}

export default class StockAreaChart extends React.Component<StockAreaChartProps, StockAreChardState> {

    constructor( props: StockAreaChartProps ) {
        super( props );
    }

    render() {
        const {valueHistory} = this.props;
        const data = valueHistory.map(value => {
            return {time: value.date.getTime(), value: value.value};
        }); // TODO: @florian -> can we do this without getTime for the show of the label?

        return (
                            <ResponsiveContainer height={150} width="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3472F7" stopOpacity={0.9}/>
                                            <stop offset="95%" stopColor="#3472F7" stopOpacity={0.2}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis
                                        dataKey={'time'}
                                        interval={120}
                                        tickFormatter={(tick) => moment(tick).format('HH:mm')}
                                    />
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Area dataKey="value" stroke="#3472F7" fill="url(#colorStock)"/>
                                </AreaChart>
                            </ResponsiveContainer>
        );
    }
}