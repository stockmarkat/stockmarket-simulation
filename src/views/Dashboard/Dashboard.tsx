import * as React from 'react';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { connect } from 'react-redux';
import { StockShareCard } from './Cards/StockShareCard'; // TODO!
import { Col, Grid, Row } from 'react-bootstrap';
import { BalanceTile, StockBalanceTile } from './Cards';

interface DashboardProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
}

interface DashboardState {
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {

    constructor(props: DashboardProps) {
        super(props);
    }

    render() {
        // const {stockCategoryValues} = this.props;

        // TODO use value from props. This is test data.
        const data = [
            {
                ratio: 1,
                categoryName: 'Weapons'
            },
            {
                ratio: 3,
                categoryName: 'Finance'
            },
            {
                ratio: 3,
                categoryName: 'Hello'
            },
            {
                ratio: 3,
                categoryName: 'Juu'
            },
            {
                ratio: 3,
                categoryName: 'Ju2u'
            },
        ];

        return (
            <div className="content">
            <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceTile value={123348}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <StockBalanceTile value={50900}/>
                        </Col>
                        <Col lg={4} sm={6}>
                             <StockShareCard stockCategoryValues={data}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    accountValue: state.depot.accountValue,
    stockValue: state.depot.stockValue,
    stockValueDevelopment: state.depot.stockValueDevelopment,
    stockCategoryValues: state.depot.stockCategoryValues
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
