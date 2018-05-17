import Dashboard from './views/Dashboard';
import Shop from './views/Shop';
import Account from './views/Account/Account';
import Inventory from './views/Inventory/Inventory';

export interface AppRoute {
    path: string;
    name: string;
    icon?: string;
    // tslint:disable-next-line no-any
    component?: any;
    upgrade?: boolean;
    redirect?: boolean;
    to?: string;
}

const appRoutes: AppRoute[] = [
    {path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard},
    {path: '/account', name: 'Account', icon: 'pe-7s-info', component: Account},
    {path: '/shop', name: 'Shop', icon: 'pe-7s-cart', component: Shop},
    {path: '/inventory', name: 'Inventory', icon: 'pe-7s-server', component: Inventory},
];

export default appRoutes;