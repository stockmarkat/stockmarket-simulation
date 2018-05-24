import * as React from 'react';
import { HeaderLinks } from '../Header/HeaderLinks';
import { SidebarLinks } from './SidebarLinks';

const logo = require( '../../assets/img/logo.png' );

interface SidebarProps {
}

interface SidebarState {
    width: number;
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {

    constructor( props: SidebarProps ) {
        super( props );
        this.state = {
            width: window.innerWidth
        };
    }

    updateDimensions() {
        this.setState( { width: window.innerWidth } );
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener( 'resize', this.updateDimensions.bind( this ) );
    }

    renderLogo() {
        return (
            <div className="logo">
                <a href="#" className="simple-text logo-mini">
                    <div className="logo-img">
                        <img src={logo} alt="logo_image"/>
                    </div>

                </a>
                <a href="#" className="simple-text logo-normal">
                    Stockmarket
                </a>
            </div>
        );
    }

    render() {

        return (
            <div id="sidebar" className="sidebar" data-color="black">
                {this.renderLogo()}

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.state.width <= 991 ? ( <HeaderLinks/> ) : null}
                        <SidebarLinks/>
                    </ul>
                </div>
            </div>
        );
    }
}