import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { BalanceTile, StockBalanceTile } from './Cards';

interface DashboardProps {
}

interface DashboardState {
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {

    constructor(props: DashboardProps) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                Dashboard

                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceTile value={123348}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <StockBalanceTile value={50900}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
