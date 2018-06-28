import * as React from 'react';
import * as Col from 'react-bootstrap/lib/Col';
import { ItemCardPriceTag } from '../ItemCard/ItemCardPriceTag';
import * as Row from 'react-bootstrap/lib/Row';
import { PriceTag } from '../PriceTag';

interface StockTileProps {

    title: string;
    total: number;
    value: number;
    count: number;
    type: 'FireArms' | 'Energy' | 'Finance' | 'RawMaterials' | 'Technology';

}

interface StockTileState {
}

export class StockTile extends React.Component<StockTileProps, StockTileState> {

    constructor( props: StockTileProps ) {
        super( props );
    }

    renderItemIcon() {

        const { type } = this.props;
        const icon = (type === 'Finance' ? 'cash' :
            (type === 'FireArms' ? 'gleam' :
                (type === 'Energy' ? 'plug' : type === 'RawMaterials' ? 'tools' : 'rocket')));

        return (
            <Col xs={1}>
                <div className="icon-big text-center icon-warning">
                    <i className={'pe-7s-' + icon + ' text-success'} />
                </div>
            </Col>
        );
    }

    renderTitle() {
        return(
            <Col xs={5}>
                <div className="stockTile-text title text-center">
                    {this.props.title}
                </div>
            </Col>
        );
    }

    renderItemPrices() {
        const { value, count } = this.props;
        const valueAsString = count.toString();
        const formattedValue = valueAsString.replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
        return (
            <Col xs={3}>
                <div className="numbers stockTileDetailBox text-left">

                    <ItemCardPriceTag type={'price'} price={value}/>
                    <span className="item-card-price-tag">
                        Anzahl:
                    </span>
                    {formattedValue}
                </div>
            </Col>
        );
    }

    renderPriceTag() {
        return(
            <Col xs={3} className="numbers text-center stockTilePriceTag">
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
                        {this.renderItemPrices()}
                        {this.renderPriceTag()}

                    </Row>
                </div>
            </div>
        );
    }
}