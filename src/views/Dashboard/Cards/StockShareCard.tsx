import * as React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { Card } from '../../../components/Card/Card';
import { StockCategoryValue } from '../../../state/AppState';

interface StockShareCardProps {
    stockCategoryValues: StockCategoryValue[];
}

interface StockShareCardState {
}

export class StockShareCard extends React.Component<StockShareCardProps, StockShareCardState> {

    constructor( props: StockShareCardProps ) {
        super( props );
    }

    render() {
        const {stockCategoryValues} = this.props;

        const data = stockCategoryValues;
        const pieData = data.map( ( value ) => {
            return {
                name: value.categoryName,
                value: value.ratio
            };
        } );
        // colors are taken from the variables.
        const colors = ['#2632c1', '#87CB16', '#943bea', '#FF9500', '#EE2D20'];

        return (
            <div className="content">
                <Card title={'Share of Stocks'} noFooter={true}>
                    <PieChart width={200} height={150}>
                        <Legend
                            iconSize={10}
                            align={'right'}
                            verticalAlign={'middle'}
                            layout={'vertical'}
                        />
                        <Pie
                            data={pieData}
                            label={false}
                            dataKey="value"
                            legendType="square"
                        >
                            {
                                data.map( ( entry, index ) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]}/>
                                ) )
                            }
                        </Pie>
                    </PieChart>
                </Card>
            </div>
        );
    }
}