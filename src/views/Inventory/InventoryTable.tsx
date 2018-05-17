import * as React from 'react';
import { Col, Table } from 'react-bootstrap';
import { Card } from '../../components/Card/Card';
import { ItemQuantity } from '../../state/AppState';
import { InventoryTableRow } from './InventoryTableRow';

interface InventoryTableProps {
    items: ItemQuantity[];
}

interface InventoryTableState {
}

export class InventoryTable extends React.Component<InventoryTableProps, InventoryTableState> {

    constructor( props: InventoryTableProps ) {
        super( props );
    }

    render() {
        const {items} = this.props;
        return (
            <Col md={12}>
                <Card
                    plain={true}
                    title="Your Inventory"
                    category="You can buy and sell stuff here"
                    ctTableFullWidth={true}
                    ctTableResponsive={true}
                >
                    <Table hover={true}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>BuyPrice</th>
                            <th>SellPrice</th>
                            <th>Profit per Piece</th>
                            <th>Stock</th>
                            <th>Buy Amount</th>
                            <th>Sell Amount</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            items.map( ( item ) => {
                                return (
                                    <InventoryTableRow
                                        key={item.itemName}
                                        itemName={item.itemName}
                                        buyPricePerPiece={item.item.buyPricePerPiece}
                                        sellPricePerPiece={item.item.sellPricePerPiece}
                                        profit={item.item.profit}
                                        quantity={item.quantity}
                                        buyAmount={0}
                                        sellAmount={0}
                                    />
                                );
                            } )
                        }
                        </tbody>
                    </Table>
                </Card>
            </Col>
        );
    }
}