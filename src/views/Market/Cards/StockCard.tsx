import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import { StockConfig } from '../../../state/Config';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';
import { Grid, Row, Col } from 'react-bootstrap';
import StockAreaChart from './StockAreaChart';
import { ChangeEvent } from 'react';

interface StockCardProps {
    stock: Stock;
    onBuy: (amount: number) => void;
    onSell: (amount: number) => void;
}

interface StockCardState {
    buyOrSellAmount: number;
}

export default class StockCard extends React.Component<StockCardProps, StockCardState> {

    constructor(props: StockCardProps) {
        super(props);

        this.setState(
            {buyOrSellAmount: 1}
        );

        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(event: ChangeEvent<HTMLInputElement>) {
        this.setState({buyOrSellAmount: event.target.valueAsNumber});
    }

    render() {
        const { stock, onBuy, onSell } = this.props;
        const { buyOrSellAmount } = this.state;

        // TODO: left side (labels and all that + text field)
        // TODO: improve performance

        return (
            <Card noHeader={true} noFooter={true} noBottomPadding={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={3}>
                            <h4 className="title">{stock.name}</h4>
                            <BuyButton onClick={() => onBuy(buyOrSellAmount)}/>
                            <input
                                type="number"
                                min="1"
                                value={buyOrSellAmount}
                                onChange={evt => this.updateInputValue(evt)}
                            />
                            <SellButton onClick={() => onSell(buyOrSellAmount)}/>
                        </Col>
                        <Col xs={9}>
                            <StockAreaChart valueHistory={stock.valueHistory} interval={StockConfig.points() / 6}/>
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}