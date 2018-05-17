import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { ItemCard } from '../../components/ItemCard/ItemCard';
import { Item, ItemWithQuantityInformation } from '../../state/AppState';

interface ItemGridProps {
    items: ItemWithQuantityInformation[];
    onAddItemToCart: ( item: Item ) => void;
    onRemoveItemFromCart: ( item: Item ) => void;
}

interface ItemGridState {
}

export class ItemGrid extends React.Component<ItemGridProps, ItemGridState> {

    constructor( props: ItemGridProps ) {
        super( props );
    }

    render() {
        const { items, onAddItemToCart, onRemoveItemFromCart } = this.props;
        return (
            <Grid fluid={true}>
                <Row>
                    {items.map( item => {
                        return (
                            <Col lg={3} sm={3} key={`Item-${item.itemName}`}>
                                <ItemCard
                                    itemName={item.itemName}
                                    itemIcon={item.itemName[ 0 ]}
                                    sellPrice={item.sellPricePerPiece}
                                    buyPrice={item.buyPricePerPiece}
                                    itemQuantity={item.quantity}
                                    onAddItem={() => {
                                        onAddItemToCart( item );
                                    }}
                                    onRemoveItem={() => {
                                        onRemoveItemFromCart( item );
                                    }}
                                />
                            </Col>
                        );
                    } )}
                </Row>
            </Grid>
        );
    }
}