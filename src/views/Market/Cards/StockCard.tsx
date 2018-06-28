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
    onBuy: ( amount: number ) => void;
    onSell: ( amount: number ) => void;
}

interface StockCardState {
    buyOrSellAmount: number;
}

export default class StockCard extends React.Component<StockCardProps, StockCardState> {

    constructor( props: StockCardProps ) {
        super( props );

        this.state = {buyOrSellAmount: 1};
        this.updateInputValue = this.updateInputValue.bind( this );
    }

    updateInputValue( amount: number ) {
        this.setState( {buyOrSellAmount: amount} );
    }

    render() {
        const {stock, onBuy, onSell} = this.props;
        const {buyOrSellAmount} = this.state;

        // TODO: left side (labels and all that + text field)
        // TODO: improve performance

        return (
            <Card noHeader={true} noFooter={true} noBottomPadding={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={4}>
                            <h4 className="title text-underline">{stock.name}</h4>
                            <p>
                                Value: {stock.value}<br/>
                                Value Change: {stock.valueChange}%<br/> { /* TODO: Add arrow */ }
                                Category: {stock.type}
                            </p>
                            <BuyButton
                                onClick={() => {
                                    onBuy( buyOrSellAmount );
                                    this.updateInputValue( 1 );
                                }}
                            />
                            <input
                                type="number"
                                min="1"
                                value={buyOrSellAmount}
                                className="input-small"
                                onChange={evt => this.updateInputValue( evt.target.valueAsNumber )}
                            />
                            <SellButton
                                onClick={() => {
                                    onSell( buyOrSellAmount );
                                    this.updateInputValue( 1 );
                                }}
                            />
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