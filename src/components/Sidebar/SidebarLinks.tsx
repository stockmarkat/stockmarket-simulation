import * as React from 'react';
import appRoutes from '../../routes/routes';
import { NavLink } from 'react-router-dom';

interface SidebarLinksProps {
}

interface SidebarLinksState {
}

export class SidebarLinks extends React.Component<SidebarLinksProps, SidebarLinksState> {

    constructor( props: SidebarLinksProps ) {
        super( props );
    }

    activeRoute( routeName: string ) {
        return window.location.pathname.indexOf( routeName ) > -1 ? 'active' : '';
    }

    render() {
        return (
            appRoutes.map( ( prop, key ) => {
                if ( !prop.redirect ) {
                    return (
                        <li
                            className={
                                prop.upgrade ?
                                    'active active-pro' : this.activeRoute( prop.path )
                            }
                            key={key}
                        >
                            <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                <i className={prop.icon}/>
                                <p>{prop.name}</p>
                            </NavLink>
                        </li>
                    );
                }
                return null;
            } )
        );
    }
}