import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { getStockCategoryValues, getStockValue } from '../../state/depot/depotSelector';
import { BalanceCard, StockBalanceCard, StockShareCard } from './Cards';
import { CapitalDevelopement } from './Cards/CapitalDevelopement';

interface DepotProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
}

interface DepotState {
}

class Depot extends React.Component<DepotProps, DepotState> {

    constructor( props: DepotProps ) {
        super( props );
    }

    render() {
        const { stockCategoryValues } = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceCard value={this.props.accountValue}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <StockBalanceCard value={this.props.stockValue}/>
                        </Col>
                        {stockCategoryValues.length > 0 &&
                        <Col lg={4} sm={6}>
                            <StockShareCard stockCategoryValues={stockCategoryValues}/>
                        </Col>
                        }
                        <Col xs={8}>
                            <CapitalDevelopement values={this.props.stockValueDevelopment}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    accountValue: state.depot.accountValue,
    stockValue: getStockValue( state ),
    stockValueDevelopment: state.depot.stockValueDevelopment,
    stockCategoryValues: getStockCategoryValues( state )
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Depot );
