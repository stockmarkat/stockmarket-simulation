import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import { StockConfig } from '../../../state/Config';
import { Grid, Row, Col } from 'react-bootstrap';
import { StockDetails } from './StockDetails';
import { BuyOrSellView } from './BuyOrSellView';
import OurAreaChart from '../../../components/Charts/OurAreaChart';

interface StockCardProps {
    stock: Stock;
    onBuy: ( amount: number ) => void;
    onSell: ( amount: number ) => void;
}

export default class StockCard extends React.Component<StockCardProps> {

    render() {
        const {stock, onBuy, onSell} = this.props;

        // TODO: improve performance

        return (
            <Card noHeader={true} noFooter={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={4}>
                            <h4 className="title text-underline">{stock.name}</h4>
                            <br/>
                            <StockDetails stock={stock}/>
                            <br/>
                            <BuyOrSellView onBuy={onBuy} onSell={onSell} />
                        </Col>
                        <Col xs={8}>
                            <OurAreaChart valueHistory={stock.valueHistory} interval={StockConfig.points() / 6}/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}