import * as React from 'react';
import { AppState, Item, ItemWithQuantityInformation } from '../../state/AppState';
import { connect } from 'react-redux';
import { getBuyableItemsWithQuantityInformation } from '../../state/items/itemsSelector';
import { addItemToCart, checkoutCart, removeItemFromCart } from '../../state/cart/cartAction';
import { ItemGrid } from './ItemGrid';
import { InformationBar } from './InformationBar/InformationBar';

interface ShopProps {
    items: ItemWithQuantityInformation[];
    totalItemsInCart: number;
    totalPrice: number;
    onAddItemToCart: ( item: Item ) => void;
    onRemoveItemFromCart: ( item: Item ) => void;
    onCheckoutCart: () => void;
}

interface ShopState {
}

class Shop extends React.Component<ShopProps, ShopState> {

    constructor( props: ShopProps ) {
        super( props );
    }

    render() {

        const {
            items,
            onAddItemToCart,
            onRemoveItemFromCart,
            totalItemsInCart,
            totalPrice,
            onCheckoutCart
        } = this.props;

        return (
            <div className="content">
                <InformationBar
                    totalItemsInCart={totalItemsInCart}
                    totalPrice={totalPrice}
                    onCheckoutClicked={onCheckoutCart}
                />
                <ItemGrid
                    items={items}
                    onAddItemToCart={onAddItemToCart}
                    onRemoveItemFromCart={onRemoveItemFromCart}
                />
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ( {
        items: getBuyableItemsWithQuantityInformation( state ),
        totalItemsInCart: state.cart.totalItems,
        totalPrice: state.cart.price,
    } )
;

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ( {
    onAddItemToCart: ( item: Item ) =>
        dispatch( addItemToCart( item ) ),
    onRemoveItemFromCart: ( item: Item ) =>
        dispatch( removeItemFromCart( item ) ),
    onCheckoutCart: () =>
        dispatch( checkoutCart() ),

} );

export default connect( mapStateToProps, mapDispatchToProps )( Shop );
