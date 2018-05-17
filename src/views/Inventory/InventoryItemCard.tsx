import * as React from 'react';
import { ItemCardPriceTag } from '../../components/ItemCard/ItemCardPriceTag';
import { Col, Row } from 'react-bootstrap';
import { ItemCardFooter } from '../../components/ItemCard/ItemCardFooter';

interface InventoryItemCardProps {
    itemName: string;
    itemIcon: string;
    profit: number;
    sellPrice: number;
    stock: number;
    sellCount: number;
    onAddItem: () => void;
    onRemoveItem: () => void;
}

interface InventoryItemCardState {
}

export class InventoryItemCard extends React.Component<InventoryItemCardProps, InventoryItemCardState> {

    constructor( props: InventoryItemCardProps ) {
        super( props );
    }

    renderItemIcon() {
        return (
            <Col xs={5}>
                <div className="icon-big text-center icon-warning">
                    {this.props.itemIcon}
                </div>
            </Col>
        );
    }

    renderItemPrices() {
        const {sellPrice, profit} = this.props;
        return (
            <Col xs={7}>
                <div className="numbers">

                    <ItemCardPriceTag type={profit > 0 ? 'buy' : 'sell'} name="Profit" price={profit}/>
                    <ItemCardPriceTag type={'buy'} name="Sell" price={sellPrice}/>

                </div>
            </Col>
        );
    }

    renderItemFooter() {
        const {itemName, onAddItem, onRemoveItem, sellCount, stock} = this.props;
        return (
            <ItemCardFooter
                itemName={stock + ' ' + itemName}
                itemQuantity={sellCount}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
            />
        );
    }

    render() {

        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        {this.renderItemIcon()}
                        {this.renderItemPrices()}

                    </Row>
                    {this.renderItemFooter()}
                </div>
            </div>
        );
    }
}