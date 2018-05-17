import Dashboard from '../views/Dashboard/index';
import Account from '../views/Account/Account';

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
];

export default appRoutes;