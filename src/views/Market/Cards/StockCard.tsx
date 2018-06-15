import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import { StockConfig } from '../../../state/Config';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';
import { Grid, Row, Col } from 'react-bootstrap';
import StockAreaChart from './StockAreaChart';

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
        const { stock, onBuy, onSell } = this.props;

        // TODO: left side (labels and all that + text field)
        // TODO: improve performance

        return (
            <Card noHeader={true} noFooter={true} noBottomPadding={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={4}>
                            <h4 className="title">{stock.name}</h4>
                            <BuyButton onClick={onBuy}/>
                            <SellButton onClick={onSell}/>
                        </Col>
                        <Col xs={8}>
                            <StockAreaChart valueHistory={stock.valueHistory} interval={StockConfig.points() / 6}/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}