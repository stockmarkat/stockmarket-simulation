import * as React from 'react';
import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import * as moment from 'moment';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';

interface StockCardProps {
    stock: Stock;
    onBuy: () => void;
    onSell: () => void;
}

interface StockCardState {
}

export default class StockCard extends React.Component<StockCardProps, StockCardState> {

    constructor( props: StockCardProps ) {
        super( props );
    }

    render() {
        const {stock, onBuy, onSell} = this.props;
        const data = stock.valueHistory.map(s => {
           return {
               name: stock.name,
               value: s.value,
               date: moment(s.date).format('hh:mm')
           };
        });

        return (
            <div className="content">
                <Card title={stock.name} noFooter={true}>
                    <AreaChart width={300} height={130} data={data}>
                        <defs>
                            <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Area dataKey="value" stroke="#8884d8" fill="url(#colorStock)" />
                    </AreaChart>
                    <BuyButton onClick={onBuy} />
                    <SellButton onClick={onSell} />
                </Card>
            </div>
        );
    }
}