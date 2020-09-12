import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import appRoutes from '../../routes/routes';

interface HeaderProps {
}

interface HeaderState {
    sidebarExists: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {

    constructor( props: HeaderProps ) {
        super( props );
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind( this );
        this.state = {
            sidebarExists: false
        };
    }

    // tslint:disable-next-line no-any
    mobileSidebarToggle( e: any ) {
        if (this.state.sidebarExists === false) {
            this.setState( {
                               sidebarExists: true
                           } );

        }
        e.preventDefault();
        document.documentElement.classList.toggle( 'nav-open' );
        const node = document.createElement( 'div' );
        node.id = 'bodyClick';
        node.onclick = function () {
            // tslint:disable-next-line no-any
            ReactDOM.findDOMNode(this as any)!.parentElement!.removeChild( this as any );
            document.documentElement.classList.toggle( 'nav-open' );
        };
        document.body.appendChild( node );
    }

    getBrand() {
        const routeIndex = appRoutes.findIndex( r => window.location.pathname.indexOf( r.path ) !== -1 );
        const appRoute = appRoutes[routeIndex];

        if (appRoute && appRoute.name) {
            return appRoute.name;
        }
        return 'Stockmarket Simulation';
    }

    render() {
        return (
            <Navbar fluid={true} >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.getBrand()}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.mobileSidebarToggle}/>
                </Navbar.Header>
            </Navbar>
        );
    }
}
