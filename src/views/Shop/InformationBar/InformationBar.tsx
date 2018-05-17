import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

interface InformationBarProps {
    totalItemsInCart: number;
    totalPrice: number;
    onCheckoutClicked: () => void;
}

interface InformationBarState {
}

export class InformationBar extends React.Component<InformationBarProps, InformationBarState> {

    constructor( props: InformationBarProps ) {
        super( props );
    }

    render() {
        const {totalItemsInCart, totalPrice, onCheckoutClicked} = this.props;
        return (
            <div className="card raw-card">
                <Navbar fluid={true}>
                    <Nav pullRight={true}>
                        <NavItem>
                            <i className="material-icons">shopping_cart</i>
                            <span className="notification">{totalItemsInCart}</span>
                        </NavItem>
                        <NavItem>
                            Total: $ {totalPrice.toFixed( 2 )}
                        </NavItem>
                        <NavItem onClick={onCheckoutClicked}>
                            <i className="material-icons">send</i>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}