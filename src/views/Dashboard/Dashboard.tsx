import * as React from 'react';
import * as Grid from 'react-bootstrap/lib/Grid';
import * as Row from 'react-bootstrap/lib/Row';
import * as Col from 'react-bootstrap/lib/Col';
import { BalanceTile , StockBalanceTile } from './Cards';

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

                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceTile value={123348} />
                        </Col>
                        <Col lg={4} sm={6}>
                            <StockBalanceTile value={50900} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
