import * as React from 'react';
import { connect } from 'react-redux';
import { AppState, ItemQuantity } from '../../state/AppState';
import { Grid } from 'react-bootstrap';
import { InventoryTable } from './InventoryTable';

interface InventoryProps {
    items: ItemQuantity[];
    totalItems: number;
    value: number;
}

interface InventoryState {
}

export class Inventory extends React.Component<InventoryProps, InventoryState> {

    constructor( props: InventoryProps ) {
        super( props );
    }

    render() {
        const {items} = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <InventoryTable items={items}/>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
        items: state.inventory.items,
        totalItems: state.inventory.totalItems,
        value: state.inventory.value
    })
;

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Inventory );
