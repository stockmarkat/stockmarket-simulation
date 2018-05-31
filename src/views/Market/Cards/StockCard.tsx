import * as React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import * as moment from 'moment';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';
import { Grid, Row, Col } from 'react-bootstrap';

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
        const data = stock.valueHistory.map( s => {
            return {
                name: stock.name,
                value: s.value,
                date: moment( s.date ).format( 'HH:mm' )
            };
        } );

        // TODO: left side (labels and all that + text field)

        return (

            <Card title={stock.name} noFooter={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={3}>
                            Hello
                            <BuyButton onClick={onBuy}/>
                            <SellButton onClick={onSell}/>
                        </Col>
                        <Col xs={9}>
                            <ResponsiveContainer height={150} width="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3472F7" stopOpacity={0.9}/>
                                            <stop offset="95%" stopColor="#3472F7" stopOpacity={0.2}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date" interval={120} />
                                    <YAxis domain={['auto', 'auto']}/>
                                    <Area dataKey="value" stroke="#3472F7" fill="url(#colorStock)"/>
                                </AreaChart>
                            </ResponsiveContainer>

                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}