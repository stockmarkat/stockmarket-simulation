import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import { StockConfig } from '../../../state/Config';
import { BuyButton } from './BuyButton';
import { SellButton } from './SellButton';
import { Grid, Row, Col } from 'react-bootstrap';
import StockAreaChart from './StockAreaChart';
import { PriceTag } from '../../../components/PriceTag';
import { getCorrectIconForType } from '../../../util/GetCorrectIcon';

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

    getArrowIcon( valueChange: number ) {
        if (valueChange > 0) {
            return 'icon-arrow-up';
        } else if (valueChange < 0) {
            return 'icon-arrow-down';
        } else {
            return 'icon-arrow-straight';
        }
    }

    getColor(valueChange: number) {
        if (valueChange > 0) {
            return 'green';
        } else if (valueChange < 0) {
            return 'red';
        } else {
            return '';
        }
    }

    render() {
        const {stock, onBuy, onSell} = this.props;
        const {buyOrSellAmount} = this.state;

        // TODO: improve performance
        // TODO: make 2-3 new components

        return (
            <Card noHeader={true} noFooter={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={4}>
                            <h4 className="title text-underline">{stock.name}</h4>
                            <br/>
                            <table>
                                <tbody>
                                <tr>
                                    <td className="bold">Value:</td>
                                    <td className="small-padding-left"><PriceTag value={stock.value}/></td>
                                </tr>
                                <tr>
                                    <td className="bold">Category:</td>
                                    <td className="small-padding-left small-padding-top">
                                        <i className={getCorrectIconForType(stock.type) + ' category-icon'} />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bold">Change:</td>
                                    <td className={'small-padding-left ' + this.getColor(stock.valueChange)}>
                                        {stock.valueChange.toFixed(2)}%
                                        &nbsp;
                                        <i className={this.getArrowIcon( stock.valueChange )}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <br/>
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