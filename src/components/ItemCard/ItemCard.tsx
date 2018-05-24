import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ItemCardPriceTag } from './ItemCardPriceTag';
import { ItemCardFooter } from './ItemCardFooter';

interface ItemCardProps {
    itemName: string;
    itemIcon: string;
    buyPrice?: number;
    sellPrice?: number;
    itemQuantity: number;
    onAddItem: () => void;
    onRemoveItem: () => void;
}

interface ItemCardState {
}

export class ItemCard extends React.PureComponent<ItemCardProps, ItemCardState> {

    constructor( props: ItemCardProps ) {
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
        const { sellPrice, buyPrice } = this.props;
        return (
            <Col xs={7}>
                <div className="numbers">

                    <ItemCardPriceTag type={'buy'} price={buyPrice}/>
                    <ItemCardPriceTag type={'sell'} price={sellPrice}/>

                </div>
            </Col>
        );
    }

    renderItemFooter() {
        const { itemName, onAddItem, onRemoveItem, itemQuantity } = this.props;
        return (
            <ItemCardFooter
                itemName={itemName}
                itemQuantity={itemQuantity}
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