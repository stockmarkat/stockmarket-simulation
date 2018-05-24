import Dashboard from '../views/Dashboard/index';

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
];

export default appRoutes;