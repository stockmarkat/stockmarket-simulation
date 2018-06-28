import Depot from '../views/Depot';
import Market from '../views/Market';

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
    { path: '/depot', name: 'Depot', icon: 'pe-7s-wallet', component: Depot },
    { path: '/market', name: 'Market', icon: 'pe-7s-graph1', component: Market },
    { path: '/', name: 'Depot', redirect: true, to: '/depot'},
];

export default appRoutes;