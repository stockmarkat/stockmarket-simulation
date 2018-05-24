import * as React from 'react';
import { MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';

interface HeaderLinksProps {
}

interface HeaderLinksState {
}

export class HeaderLinks extends React.Component<HeaderLinksProps, HeaderLinksState> {

    constructor( props: HeaderLinksProps ) {
        super( props );
    }

    render() {
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"/>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                </Nav>
                <Nav pullRight={true}>
                    <NavItem eventKey={1} href="#">Account</NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something</MenuItem>
                        <MenuItem eventKey={2.4}>Another action</MenuItem>
                        <MenuItem eventKey={2.5}>Something</MenuItem>
                        <MenuItem divider={true}/>
                        <MenuItem eventKey={2.5}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">Log out</NavItem>
                </Nav>
            </div>
        );
    }
}
