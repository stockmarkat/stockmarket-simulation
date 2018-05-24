import * as React from 'react';

interface DepotProps {
}

interface DepotState {
}

export class Depot extends React.Component<DepotProps, DepotState> {

    constructor( props: DepotProps ) {
        super( props );
    }

    render() {
        return (
            <div className="content">
                Dashboard ADD YOUR TILES HERE
            </div>
        );
    }
}