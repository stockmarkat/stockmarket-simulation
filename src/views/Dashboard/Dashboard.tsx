import * as React from 'react';

interface DashboardProps {
}

interface DashboardState {
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {

    constructor( props: DashboardProps ) {
        super( props );
    }

    render() {
        return (
            <div className="content">
                Dashboard
            </div>
        );
    }
}
