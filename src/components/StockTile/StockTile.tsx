import * as React from 'react';
import * as Col from 'react-bootstrap/lib/Col';
import * as Row from 'react-bootstrap/lib/Row';
import { StockType } from '../../state/AppState';
import { getCorrectIconForType } from '../../util/GetCorrectIcon';
import { PriceTag } from '../PriceTag';

interface StockTileProps {
    title: string;
    total: number;
    value: number;
    count: number;
    type: StockType;
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
                    {this.props.title}
                </div>
            </Col>
        );
    }

    renderQuantity() {
        const { count } = this.props;

        return (

            <Col xs={1}>

                <div className={'stockTileCountBox stockTileDetailBox text-left'}>
                    <div className={'stockTileCountText'}>
                        Quantity:
                    </div>
                    <div className={'stockTileCountNumber'}>
                        {count}
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
        return (
            <Col xs={2} className="numbers text-center stockTilePriceTag">
                <PriceTag value={this.props.total}/>
            </Col>
        );
    }

    render() {
        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        {this.renderItemIcon()}
                        {this.renderTitle()}
                        {this.renderQuantity()}
                        {this.renderSinglePrice()}
                        {this.renderPriceTag()}
                    </Row>
                </div>
            </div>
        );
    }
}