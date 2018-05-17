import * as React from 'react';
import { PriceTag } from '../../components/PriceTag';

interface InventoryTableRowProps {
    itemName: string;
    buyPricePerPiece?: number;
    sellPricePerPiece?: number;
    profit?: number;
    quantity?: number;
    buyAmount?: number;
    sellAmount?: number;

}

interface InventoryTableRowState {
}

export class InventoryTableRow extends React.PureComponent<InventoryTableRowProps, InventoryTableRowState> {

    constructor( props: InventoryTableRowProps ) {
        super( props );
    }

    render() {
        const {itemName, buyPricePerPiece, sellPricePerPiece, profit, quantity, buyAmount, sellAmount} = this.props;

        return (
            <tr>
                <td>{itemName}</td>
                <td><PriceTag value={buyPricePerPiece}/></td>
                <td><PriceTag value={sellPricePerPiece}/></td>
                <td><PriceTag value={profit}/></td>
                <td>{quantity}</td>
                <td>{buyAmount}</td>
                <td>{sellAmount}</td>
            </tr>
        );
    }
}