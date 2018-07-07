import * as React from 'react';
import * as Col from 'react-bootstrap/lib/Col';
import * as Row from 'react-bootstrap/lib/Row';
import { StockType } from '../../state/AppState';
import { getCorrectIconForType } from '../../util/GetCorrectIcon';
import { Card } from '../Card/Card';
import { PriceTag } from '../PriceTag';

interface StockTileProps {
    name: string; // the name of the stock
    value: number; // the value of one stock
    amount: number; // the amount of Stocks owned
    type: StockType; // the Type of stock
}

export class StockTile extends React.Component<StockTileProps> {

    constructor(props: StockTileProps) {
        super(props);
    }

    renderItemIcon() {
        const { type } = this.props;
        const icon = getCorrectIconForType(type);

        return (
            <Col xs={1}>
                <div className="icon-big text-center icon-warning">
                    <i className={icon}/>
                </div>
            </Col>
        );
    }

    renderTitle() {
        return (
            <Col xs={6}>
                <div className="stockTile-text title text-center">
                    {this.props.name}
                </div>
            </Col>
        );
    }

    renderQuantity() {
        const { amount } = this.props;

        return (

            <Col xs={1}>

                <div className={'stockTileCountBox stockTileDetailBox text-left'}>
                    <div className={'stockTileCountText'}>
                        Quantity:
                    </div>
                    <div className={'stockTileCountNumber'}>
                        {amount}
                    </div>
                </div>

            </Col>

        );
    }

    renderSinglePrice() {
        const { value } = this.props;

        return (

            <Col xs={2}>

                <div className="numbers stockTileDetailBox text-left">
                    <div>
                        Price:
                    </div>

                    <div>
                        <PriceTag value={value}/>
                    </div>

                </div>
            </Col>

        );
    }

    renderPriceTag() {
        const { value, amount} = this.props;
        return (
            <Col xs={2} className="numbers text-center stockTilePriceTag">
                <PriceTag value={value * amount}/>
            </Col>
        );
    }

    render() {
        return (
            <Card noHeader={true} noFooter={true}>
                <Row>
                    {this.renderItemIcon()}
                    {this.renderTitle()}
                    {this.renderQuantity()}
                    {this.renderSinglePrice()}
                    {this.renderPriceTag()}
                </Row>
            </Card>
        );
    }
}