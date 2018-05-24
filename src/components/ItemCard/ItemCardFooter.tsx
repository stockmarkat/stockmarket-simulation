import * as React from 'react';
import { QuantityCount } from './QuantityCount';

interface ItemCardFooterProps {
    onAddItem: () => void;
    onRemoveItem: () => void;
    itemName: string;
    itemQuantity: number;
}

interface ItemCardFooterState {
}

export class ItemCardFooter extends React.Component<ItemCardFooterProps, ItemCardFooterState> {

    constructor( props: ItemCardFooterProps ) {
        super( props );
    }

    render() {
        const { itemName, itemQuantity, onRemoveItem, onAddItem } = this.props;
        return (
            <div className="footer">
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td style={{ width: '100%' }}>{itemName}</td>
                        <td style={{ width: '25%' }}>
                            <QuantityCount
                                onAddItem={onAddItem}
                                onRemoveItem={onRemoveItem}
                                itemCount={itemQuantity}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}