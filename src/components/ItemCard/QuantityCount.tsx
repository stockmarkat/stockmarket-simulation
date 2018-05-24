import * as React from 'react';
import { AddButton } from './Buttons/AddButton';
import { RemoveButton } from './Buttons/RemoveButton';
import { Badge } from 'react-bootstrap';

interface QuantityCountProps {
    onAddItem: () => void;
    onRemoveItem: () => void;
    itemCount: number;
}

interface QuantityCountState {
}

export class QuantityCount extends React.Component<QuantityCountProps, QuantityCountState> {

    constructor( props: QuantityCountProps ) {
        super( props );
    }

    render() {
        const { itemCount, onAddItem, onRemoveItem } = this.props;
        return (
            <table>
                <tbody>
                <tr>
                    <td><RemoveButton onClick={onRemoveItem}/></td>
                    <td><Badge>{itemCount ? itemCount : 0}</Badge></td>
                    <td><AddButton onClick={onAddItem}/></td>
                </tr>
                </tbody>
            </table>
        );
    }
}